/**
 * UI-Alchemy Login — Light Theme + 3D Neon Effects
 * Bright white/light canvas with vibrant cyan & magenta neon accents,
 * 3D card tilt, animated particles on a light background.
 */
import React, {
  useState, useEffect, useRef, useCallback,
  type ChangeEvent, type FC, type CSSProperties,
} from "react";
import type { AuthError } from "firebase/auth";
import { selectUser, selectInitialising, clearError } from "../app/authSlice";
import {
  useSignInMutation, useSignUpMutation,
  useGoogleSignInMutation,
  //  useForgotPasswordMutation,
} from "../api/authApi";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useNavigate } from "react-router-dom";

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  cyan:    '#00b4d8',
  magenta: '#d400c8',
  lime:    '#5cb800',
  purple:  '#6e00e6',
  bg:      '#f0f4ff',
  card:    '#ffffff',
  text:    '#0d0d2b',
  dim:     '#7880a0',
  border:  '#e4e8f5',
};

// ── Firebase error map ───────────────────────────────────────────────────────
const FE: Record<string, string> = {
  "auth/invalid-credential":     "Invalid credentials.",
  "auth/user-not-found":         "No account with that email.",
  "auth/wrong-password":         "Incorrect password.",
  "auth/email-already-in-use":   "Email already registered.",
  "auth/weak-password":          "Min 6 characters required.",
  "auth/invalid-email":          "Invalid email address.",
  "auth/popup-closed-by-user":   "Google sign-in cancelled.",
  "auth/network-request-failed": "Network error.",
  "auth/too-many-requests":      "Too many attempts. Try later.",
};
const friendlyErr = (err: unknown) => {
  const e = (err as any)?.data as AuthError | undefined;
  if (e?.code) return FE[e.code] ?? e.message;
  return (err as any)?.error ?? "Something went wrong.";
};

type Panel = "signin" | "signup" | "forgot";

// ── Inject keyframes once ────────────────────────────────────────────────────
const injectKF = () => {
  if (document.getElementById('alchemy-login-kf')) return;
  const s = document.createElement('style');
  s.id = 'alchemy-login-kf';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Exo+2:wght@300;400;500;600;700&display=swap');
    @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
    @keyframes rotSlow { to{transform:rotate(360deg)} }
    @keyframes nPulse  { 0%,100%{opacity:1} 50%{opacity:0.4} }
    @keyframes flicker { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:.75} 94%{opacity:1} }
    @keyframes blobMove1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-20px) scale(1.05)} }
    @keyframes blobMove2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-25px,15px) scale(0.95)} }
    .inp-light { transition: all 0.25s ease !important; }
    .inp-light:focus {
      outline: none !important;
      border-color: #00b4d8 !important;
      box-shadow: 0 0 0 3px rgba(0,180,216,0.14), 0 2px 12px rgba(0,180,216,0.12) !important;
    }
    .inp-light::placeholder { color: #c0c6e0; }
    .btn-neon-light {
      position:relative; overflow:hidden;
      transition: transform 0.15s ease, box-shadow 0.15s ease !important;
    }
    .btn-neon-light::before {
      content:''; position:absolute; inset:0;
      background:linear-gradient(45deg,transparent 40%,rgba(255,255,255,0.35) 50%,transparent 60%);
      transform:translateX(-100%); transition:transform 0.45s ease;
    }
    .btn-neon-light:hover::before { transform:translateX(120%); }
    .btn-neon-light:hover { transform:translateY(-2px) !important; }
    .btn-neon-light:active { transform:translateY(0) !important; }
    .link-neon { transition:color .2s,text-shadow .2s; cursor:pointer; }
    .link-neon:hover { color:#00b4d8 !important; text-decoration:underline; }
  `;
  document.head.appendChild(s);
};

// ── Light particle canvas ────────────────────────────────────────────────────
interface Dot { x:number; y:number; vx:number; vy:number; r:number; color:string; o:number; }

const BgCanvas: FC = () => {
  const ref  = useRef<HTMLCanvasElement>(null);
  const raf  = useRef(0);
  const dots = useRef<Dot[]>([]);
  const sz   = useRef({ W:0, H:0 });
  const COLS = ['rgba(0,180,216,', 'rgba(212,0,200,', 'rgba(92,184,0,', 'rgba(110,0,230,'];

  useEffect(() => {
    injectKF();
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;

    const init = (W:number, H:number) => {
      dots.current = Array.from({ length: Math.floor(W*H/9000) }, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-.5)*.2, vy: (Math.random()-.5)*.2,
        r: Math.random()*1.5+.4,
        color: COLS[Math.floor(Math.random()*COLS.length)],
        o: Math.random()*.5+.1,
      }));
    };
    const resize = () => {
      const W = cv.width  = window.innerWidth;
      const H = cv.height = window.innerHeight;
      sz.current = {W,H}; init(W,H);
    };
    window.addEventListener('resize', resize); resize();

    const draw = () => {
      const {W,H} = sz.current;
      ctx.clearRect(0,0,W,H);

      // Light dot grid
      ctx.fillStyle = 'rgba(0,180,216,0.06)';
      for (let x=0;x<W;x+=32) for (let y=0;y<H;y+=32) {
        ctx.beginPath(); ctx.arc(x,y,1,0,Math.PI*2); ctx.fill();
      }

      // Particles
      for (const d of dots.current) {
        d.x+=d.vx; d.y+=d.vy;
        if(d.x<0||d.x>W)d.vx*=-1; if(d.y<0||d.y>H)d.vy*=-1;
        ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
        ctx.fillStyle=d.color+d.o+')'; ctx.fill();
      }
      // Connections
      for(let i=0;i<dots.current.length;i++) {
        for(let j=i+1;j<dots.current.length;j++) {
          const dx=dots.current[i].x-dots.current[j].x;
          const dy=dots.current[i].y-dots.current[j].y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<80){
            ctx.beginPath();
            ctx.moveTo(dots.current[i].x,dots.current[i].y);
            ctx.lineTo(dots.current[j].x,dots.current[j].y);
            ctx.strokeStyle=`rgba(0,180,216,${0.06*(1-dist/80)})`;
            ctx.lineWidth=.6; ctx.stroke();
          }
        }
      }
      raf.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize',resize); cancelAnimationFrame(raf.current); };
  }, []);

  return <canvas ref={ref} style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }} />;
};

// ── Input field ──────────────────────────────────────────────────────────────
interface FieldProps {
  label:string; type:string; value:string;
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
  placeholder:string; autoComplete?:string;
  icon:React.ReactNode; rightSlot?:React.ReactNode;
}
const Field: FC<FieldProps> = ({ label,type,value,onChange,placeholder,autoComplete,icon,rightSlot }) => (
  <div style={{ marginBottom:16 }}>
    <label style={{ display:'block', fontSize:'0.7rem', fontFamily:'Orbitron,sans-serif', color:C.cyan, letterSpacing:'0.14em', marginBottom:6, textTransform:'uppercase' }}>
      {label}
    </label>
    <div style={{ position:'relative' }}>
      <div style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:'rgba(0,180,216,0.5)', display:'flex', alignItems:'center' }}>
        {icon}
      </div>
      <input
        className="inp-light"
        type={type} value={value} onChange={onChange}
        placeholder={placeholder} autoComplete={autoComplete}
        style={{
          width:'100%', padding:'12px 14px 12px 40px',
          background:'#f7f9fe',
          border:'1.5px solid #e4e8f5',
          borderRadius:10, color:C.text,
          fontFamily:'Exo 2,sans-serif', fontSize:'0.88rem',
          transition:'all 0.25s ease', boxSizing:'border-box',
          paddingRight: rightSlot ? 44 : 14,
        } as CSSProperties}
      />
      {rightSlot && (
        <div style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', cursor:'pointer', color:'rgba(0,180,216,0.5)' }}>
          {rightSlot}
        </div>
      )}
    </div>
  </div>
);

// ── Error banner ─────────────────────────────────────────────────────────────
const ErrBanner: FC<{ msg:string }> = ({ msg }) => msg ? (
  <div style={{
    padding:'10px 14px', borderRadius:8, marginBottom:14,
    background:'rgba(212,0,200,0.06)', border:'1.5px solid rgba(212,0,200,0.25)',
    color:C.magenta, fontSize:'0.8rem', fontFamily:'Exo 2,sans-serif',
    display:'flex', alignItems:'center', gap:8,
  }}>
    <span>⚠</span> {msg}
  </div>
) : null;

// ── Primary button ───────────────────────────────────────────────────────────
const PrimaryBtn: FC<{ label:string; loading?:boolean; onClick:()=>void; color?:string }> = ({ label, loading, onClick, color = C.cyan }) => {
  const isMag = color === C.magenta;
  return (
    <button className="btn-neon-light" onClick={onClick} disabled={loading} style={{
      width:'100%', padding:'13px',
      background: isMag
        ? `linear-gradient(135deg, ${C.magenta}, #b800b0)`
        : `linear-gradient(135deg, ${C.cyan}, #0090b8)`,
      border: 'none', borderRadius:10, color:'#fff',
      fontFamily:'Orbitron,sans-serif', fontWeight:700,
      fontSize:'0.78rem', letterSpacing:'0.14em',
      cursor: loading ? 'not-allowed' : 'pointer',
      opacity: loading ? 0.65 : 1,
      boxShadow: isMag
        ? '0 4px 20px rgba(212,0,200,0.35)'
        : '0 4px 20px rgba(0,180,216,0.35)',
      marginBottom:10,
    } as CSSProperties}>
      {loading ? '◌  PROCESSING...' : label}
    </button>
  );
};

// ── Google button ─────────────────────────────────────────────────────────────
const GoogleBtn: FC<{ loading:boolean; onClick:()=>void }> = ({ loading, onClick }) => (
  <button className="btn-neon-light" onClick={onClick} disabled={loading} style={{
    width:'100%', padding:'12px',
    background:'#fff', border:'1.5px solid #e4e8f5', borderRadius:10,
    color:C.text, fontFamily:'Exo 2,sans-serif', fontWeight:500,
    fontSize:'0.84rem', cursor: loading?'not-allowed':'pointer',
    display:'flex', alignItems:'center', justifyContent:'center', gap:10,
    boxShadow:'0 2px 10px rgba(0,0,0,0.06)',
    opacity: loading ? 0.65 : 1,
  } as CSSProperties}>
    <svg width={18} height={18} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
    {loading ? 'Connecting...' : 'Continue with Google'}
  </button>
);

// ── Divider ──────────────────────────────────────────────────────────────────
const OrDivider: FC = () => (
  <div style={{ display:'flex', alignItems:'center', gap:12, margin:'14px 0' }}>
    <div style={{ flex:1, height:1, background:'#eaecf8' }} />
    <span style={{ fontSize:'0.7rem', color:'#c0c6e0', fontFamily:'Orbitron,sans-serif', letterSpacing:'0.1em' }}>OR</span>
    <div style={{ flex:1, height:1, background:'#eaecf8' }} />
  </div>
);

// ── Sign-in panel ─────────────────────────────────────────────────────────────
const SignIn: FC<{ onSwitch:(p:Panel)=>void }> = ({ onSwitch }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [pass,  setPass]  = useState('');
  const [showP, setShowP] = useState(false);
  const [signIn, { isLoading, error }] = useSignInMutation();
  const [googleSignIn, { isLoading:gLoad }] = useGoogleSignInMutation();
  const errMsg = error ? friendlyErr(error) : '';

  return (
    <div>
      <ErrBanner msg={errMsg} />
      <Field label="Email Address" type="email" value={email} onChange={e=>setEmail(e.target.value)}
        placeholder="you@domain.com" autoComplete="email"
        icon={<svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}
      />
      <Field label="Password" type={showP?'text':'password'} value={pass} onChange={e=>setPass(e.target.value)}
        placeholder="••••••••" autoComplete="current-password"
        icon={<svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
        rightSlot={<span onClick={()=>setShowP(v=>!v)}>
          {showP
            ? <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            : <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
        </span>}
      />
      <div style={{ textAlign:'right', marginBottom:18, marginTop:-8 }}>
        <span className="link-neon" onClick={()=>onSwitch('forgot')} style={{ fontSize:'0.76rem', color:C.dim, fontFamily:'Exo 2,sans-serif' }}>
          Forgot password?
        </span>
      </div>
      <PrimaryBtn label="SIGN IN" loading={isLoading} onClick={()=>{ dispatch(clearError()); signIn({ email, password:pass }); }} />
      <OrDivider />
      <GoogleBtn loading={gLoad} onClick={googleSignIn} />
      <p style={{ textAlign:'center', fontSize:'0.78rem', color:C.dim, marginTop:18, fontFamily:'Exo 2,sans-serif' }}>
        No account?{' '}
        <span className="link-neon" onClick={()=>onSwitch('signup')} style={{ color:C.magenta, fontWeight:700 }}>
          Create one →
        </span>
      </p>
    </div>
  );
};

// ── Sign-up panel ─────────────────────────────────────────────────────────────
const SignUp: FC<{ onSwitch:(p:Panel)=>void }> = ({ onSwitch }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [pass,  setPass]  = useState('');
  const [conf,  setConf]  = useState('');
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const mismatch = pass && conf && pass!==conf ? 'Passwords do not match.' : '';
  const errMsg   = mismatch || (error ? friendlyErr(error) : '');

  return (
    <div>
      <ErrBanner msg={errMsg} />
      <Field label="Email Address" type="email" value={email} onChange={e=>setEmail(e.target.value)}
        placeholder="you@domain.com" autoComplete="email"
        icon={<svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}
      />
      <Field label="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)}
        placeholder="Min 6 characters"
        icon={<svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
      />
      <Field label="Confirm Password" type="password" value={conf} onChange={e=>setConf(e.target.value)}
        placeholder="Re-enter password"
        icon={<svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
      />
      <PrimaryBtn label="CREATE ACCOUNT" loading={isLoading} onClick={()=>{ if(pass!==conf)return; dispatch(clearError()); signUp({email,password:pass}); }} color={C.magenta} />
      <p style={{ textAlign:'center', fontSize:'0.78rem', color:C.dim, marginTop:14, fontFamily:'Exo 2,sans-serif' }}>
        Already have an account?{' '}
        <span className="link-neon" onClick={()=>onSwitch('signin')} style={{ color:C.cyan, fontWeight:700 }}>
          Sign in →
        </span>
      </p>
    </div>
  );
};

// ── Forgot password ───────────────────────────────────────────────────────────
// const ForgotPass: FC<{ onSwitch:(p:Panel)=>void }> = ({ onSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [sent, setSent]   = useState(false);
//   const [forgotPassword, { isLoading, error }] = useForgotPasswordMutation();

//   return (
//     <div>
//       {sent ? (
//         <div style={{ textAlign:'center', padding:'20px 0' }}>
//           <div style={{ fontSize:'2.5rem', marginBottom:12 }}>📬</div>
//           <p style={{ color:C.cyan, fontFamily:'Orbitron,sans-serif', fontSize:'0.78rem', letterSpacing:'0.1em', marginBottom:8 }}>RESET LINK SENT</p>
//           <p style={{ color:C.dim, fontSize:'0.78rem', fontFamily:'Exo 2,sans-serif', marginBottom:20 }}>Check your inbox at <strong style={{color:C.text}}>{email}</strong></p>
//           <PrimaryBtn label="BACK TO SIGN IN" onClick={()=>onSwitch('signin')} />
//         </div>
//       ) : (
//         <>
//           <p style={{ fontSize:'0.82rem', color:C.dim, fontFamily:'Exo 2,sans-serif', marginBottom:20, lineHeight:1.7 }}>
//             Enter your email and we'll send you a reset link.
//           </p>
//           {error && <ErrBanner msg={friendlyErr(error)} />}
//           <Field label="Email Address" type="email" value={email} onChange={e=>setEmail(e.target.value)}
//             placeholder="you@domain.com"
//             icon={<svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}
//           />
//           <PrimaryBtn label="SEND RESET LINK" loading={isLoading} onClick={async()=>{ await forgotPassword(email); setSent(true); }} />
//           <p style={{ textAlign:'center', fontSize:'0.78rem', color:C.dim, marginTop:14, fontFamily:'Exo 2,sans-serif' }}>
//             <span className="link-neon" onClick={()=>onSwitch('signin')} style={{ color:C.cyan }}>← Back to sign in</span>
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// ── Panel meta ───────────────────────────────────────────────────────────────
const PANEL_META: Record<Panel,{title:string;sub:string;color:string}> = {
  signin: { title:'SIGN IN',        sub:'Access your design forge',    color:C.cyan    },
  signup: { title:'CREATE ACCOUNT', sub:'Join the design collective',  color:C.magenta },
  forgot: { title:'RESET ACCESS',   sub:'Recover your credentials',    color:C.purple  },
};

// ── Main LoginPage ────────────────────────────────────────────────────────────
export default function LoginPage() {
  const navigate     = useNavigate();
  const user         = useAppSelector(selectUser);
  const initialising = useAppSelector(selectInitialising);
  const [panel, setPanel] = useState<Panel>('signin');
  const [rotX, setRotX]   = useState(0);
  const [rotY, setRotY]   = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (!initialising && user) navigate('/', { replace:true }); }, [user, initialising]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const r = cardRef.current?.getBoundingClientRect(); if(!r) return;
    setRotY( ((e.clientX - r.left) / r.width  - 0.5) * 12);
    setRotX(-((e.clientY - r.top)  / r.height - 0.5) * 8);
  }, []);
  const handleMouseLeave = useCallback(() => { setRotX(0); setRotY(0); }, []);

  const meta = PANEL_META[panel];

  return (
    <div style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      background:'#f0f4ff', position:'relative', overflow:'hidden',
      fontFamily:'Exo 2, sans-serif',
    }}>
      <BgCanvas />

      {/* Ambient blobs */}
      <div style={{
        position:'fixed', top:'-10%', left:'-5%', width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)',
        animation:'blobMove1 12s ease-in-out infinite', pointerEvents:'none', zIndex:1,
      }} />
      <div style={{
        position:'fixed', bottom:'-10%', right:'-5%', width:600, height:600, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(212,0,200,0.09) 0%, transparent 70%)',
        animation:'blobMove2 15s ease-in-out infinite', pointerEvents:'none', zIndex:1,
      }} />
      <div style={{
        position:'fixed', top:'40%', right:'20%', width:300, height:300, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(92,184,0,0.07) 0%, transparent 70%)',
        pointerEvents:'none', zIndex:1,
      }} />

      {/* Left branding panel */}
      <div style={{
        display: window.innerWidth < 900 ? 'none' : 'flex',
        flexDirection:'column', alignItems:'flex-start',
        padding:'60px 60px 60px 80px', maxWidth:480, flex:1,
        position:'relative', zIndex:3,
      } as CSSProperties}>

        {/* Animated hex logo */}
        <div style={{ width:90, height:90, position:'relative', marginBottom:32, animation:'floatY 4s ease-in-out infinite' }}>
          <div style={{
            position:'absolute', inset:-3, border:`2px solid ${C.cyan}`,
            borderRadius:'50%', borderTopColor:'transparent',
            animation:'rotSlow 5s linear infinite',
            boxShadow:`0 0 16px rgba(0,180,216,0.35)`,
          }} />
          <div style={{
            position:'absolute', inset:6, border:`1.5px solid rgba(212,0,200,0.3)`,
            borderRadius:'50%', animation:'rotSlow 8s linear infinite reverse',
          }} />
          <div style={{
            position:'absolute', inset:14,
            background:`linear-gradient(135deg, ${C.cyan}, ${C.magenta})`,
            borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:`0 4px 24px rgba(0,180,216,0.4)`,
          }}>
            <span style={{ fontFamily:'Orbitron,sans-serif', fontWeight:900, fontSize:'1.1rem', color:'#fff' }}>UA</span>
          </div>
        </div>

        <h1 style={{
          fontFamily:'Orbitron,sans-serif', fontWeight:900,
          fontSize:'clamp(2rem,3.5vw,2.8rem)', lineHeight:1, marginBottom:6,
          background:`linear-gradient(135deg, ${C.cyan} 0%, ${C.magenta} 60%, ${C.purple} 100%)`,
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          animation:'flicker 10s infinite',
        } as CSSProperties}>
          UI-Alchemy
        </h1>

        <p style={{ fontFamily:'Orbitron,sans-serif', fontSize:'0.72rem', letterSpacing:'0.24em', color:C.cyan, marginBottom:28, textTransform:'uppercase' }}>
          Design System Interface
        </p>

        <p style={{ fontSize:'1rem', color:'#4a5070', lineHeight:1.85, maxWidth:340, marginBottom:36 }}>
          Craft exceptional interfaces with our component forge. Precision tools for bold, vibrant design.
        </p>

        {/* Feature chips */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
          {['3D Effects','Neon Accents','RTK Query','Firebase Auth','MUI','Vite'].map((chip, i) => (
            <div key={chip} style={{
              padding:'6px 14px', borderRadius:20,
              border:`1.5px solid ${i%2===0 ? 'rgba(0,180,216,0.4)' : 'rgba(212,0,200,0.35)'}`,
              color: i%2===0 ? C.cyan : C.magenta,
              fontSize:'0.68rem', fontFamily:'Orbitron,sans-serif', letterSpacing:'0.08em',
              background: i%2===0 ? 'rgba(0,180,216,0.07)' : 'rgba(212,0,200,0.07)',
              boxShadow: i%2===0 ? '0 2px 10px rgba(0,180,216,0.15)' : '0 2px 10px rgba(212,0,200,0.12)',
            }}>
              {chip}
            </div>
          ))}
        </div>
      </div>

      {/* Right auth card */}
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'24px', position:'relative', zIndex:3 }}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            width:'100%', maxWidth:420,
            transform:`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transition:'transform 0.08s ease', transformStyle:'preserve-3d',
          }}
        >
          {/* Drop shadow glow */}
          <div style={{
            position:'absolute', inset:-2,
            background:`linear-gradient(135deg, rgba(0,180,216,0.3), rgba(212,0,200,0.25), rgba(92,184,0,0.2))`,
            borderRadius:22, filter:'blur(18px)', opacity:0.5, transform:'translateZ(-10px)',
          }} />

          {/* Card */}
          <div style={{
            background:'#ffffff',
            border:'1.5px solid #e4e8f5',
            borderRadius:20, padding:'36px 32px',
            boxShadow:'0 24px 64px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,180,216,0.06)',
            position:'relative', overflow:'hidden',
          }}>
            {/* Top gradient bar */}
            <div style={{
              position:'absolute', top:0, left:0, right:0, height:3,
              background:`linear-gradient(90deg, ${C.cyan}, ${C.magenta}, ${C.purple})`,
            }} />

            {/* Corner marks */}
            <div style={{ position:'absolute', top:0, left:0, width:36, height:36, borderTop:`2px solid ${C.cyan}`, borderLeft:`2px solid ${C.cyan}`, borderRadius:'20px 0 0 0', opacity:.6 }} />
            <div style={{ position:'absolute', top:0, right:0, width:36, height:36, borderTop:`2px solid ${C.magenta}`, borderRight:`2px solid ${C.magenta}`, borderRadius:'0 20px 0 0', opacity:.5 }} />
            <div style={{ position:'absolute', bottom:0, left:0, width:36, height:36, borderBottom:`2px solid rgba(212,0,200,.3)`, borderLeft:`2px solid rgba(212,0,200,.3)`, borderRadius:'0 0 0 20px' }} />
            <div style={{ position:'absolute', bottom:0, right:0, width:36, height:36, borderBottom:`2px solid rgba(0,180,216,.3)`, borderRight:`2px solid rgba(0,180,216,.3)`, borderRadius:'0 0 20px 0' }} />

            {/* Panel header */}
            <div style={{ marginBottom:28 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:5 }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:meta.color, boxShadow:`0 0 8px ${meta.color}`, animation:'nPulse 2s infinite' }} />
                <h2 style={{
                  fontFamily:'Orbitron,sans-serif', fontWeight:800,
                  fontSize:'1.05rem', letterSpacing:'0.12em', margin:0,
                  background: panel === 'signup'
                    ? `linear-gradient(135deg, ${C.magenta}, ${C.purple})`
                    : `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                } as CSSProperties}>
                  {meta.title}
                </h2>
              </div>
              <p style={{ fontSize:'0.76rem', color:C.dim, fontFamily:'Exo 2,sans-serif', margin:0, paddingLeft:18 }}>
                {meta.sub}
              </p>
            </div>

            {panel === 'signin' && <SignIn onSwitch={setPanel} />}
            {panel === 'signup' && <SignUp onSwitch={setPanel} />}
            {/* {panel === 'forgot' && <ForgotPass onSwitch={setPanel} />} */}

            {/* Footer */}
            <div style={{ marginTop:20, paddingTop:14, borderTop:'1px solid #f0f2fa', display:'flex', alignItems:'center', justifyContent:'center', gap:7 }}>
              <div style={{ width:5, height:5, borderRadius:'50%', background:'#22cc66', boxShadow:'0 0 5px #22cc66', animation:'nPulse 2s infinite' }} />
              <span style={{ fontSize:'0.6rem', color:C.cyan, fontFamily:'Orbitron,sans-serif', letterSpacing:'0.14em' }}>
                SECURED CONNECTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

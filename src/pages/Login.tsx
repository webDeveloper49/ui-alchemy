/**
 * LoginPage.tsx  (Redux Toolkit + RTK Query version)
 *
 * Auth state  → Redux authSlice   (selectUser, selectAuthError, selectInitialising)
 * Auth calls  → RTK Query authApi (useSignInMutation, useSignUpMutation, …)
 *
 * Dependencies:
 *   npm install firebase @reduxjs/toolkit react-redux
 *
 * Setup:
 *   1. Fill in firebase.ts with your Firebase project config.
 *   2. Wrap your app root with <Provider store={store}> (see main.tsx example below).
 *   3. Call dispatch(initAuth()) once on app boot so onAuthStateChanged is wired.
 *
 * main.tsx example:
 *   import { Provider }  from "react-redux";
 *   import { store }     from "./store/store";
 *   import { initAuth }  from "./store/auth/authSlice";
 *   import LoginPage     from "./LoginPage";
 *
 *   store.dispatch(initAuth());
 *
 *   createRoot(document.getElementById("root")!).render(
 *     <Provider store={store}>
 *       <LoginPage onSuccess={(user) => console.log(user)} />
 *     </Provider>
 *   );
 */

import React, {
  useState,
  useEffect,
  useRef,
  type ChangeEvent,
  type ReactNode,
  type FC,
  type CSSProperties,
  type FocusEvent,
  type MouseEvent,
} from "react";
import type { AuthError } from "firebase/auth";

// ── Redux ────────────────────────────────────────────────────────────────────

import {
  selectUser,
  selectInitialising,
  clearError,
} from "../app/authSlice";
import {
  useSignInMutation,
  useSignUpMutation,
  useGoogleSignInMutation,
  useForgotPasswordMutation,
  useLogOutMutation,
} from "../api/authApi";
import type { SerializableUser } from "../models/Auth.types";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useNavigate } from "react-router-dom";

// ── Types ────────────────────────────────────────────────────────────────────

type PanelName = "signin" | "signup" | "success";

interface LoginPageProps {
  onSuccess?: (user: SerializableUser) => void;
}
interface SignInPanelProps  { onSwitch: (p: PanelName) => void; }
interface SignUpPanelProps  { onSwitch: (p: PanelName) => void; }
interface SuccessPanelProps { user: SerializableUser; }

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoComplete?: string;
  icon: ReactNode;
  rightSlot?: ReactNode;
}
interface GoogleButtonProps  { label: string; loading: boolean; onClick: () => void; }
interface PrimaryButtonProps { label: string; loading?: boolean; onClick: () => void; }
interface FooterLinkProps    { label: string; onClick: () => void; }
interface Dot { x: number; y: number; vx: number; vy: number; r: number; o: number; }
interface ChipItem { label: string; active: boolean; }

// ── Constants ────────────────────────────────────────────────────────────────

const FIREBASE_ERRORS: Record<string, string> = {
  "auth/invalid-credential":     "Wrong email or password.",
  "auth/user-not-found":         "No account with that email.",
  "auth/wrong-password":         "Incorrect password.",
  "auth/email-already-in-use":   "Email already registered.",
  "auth/weak-password":          "Password must be at least 6 characters.",
  "auth/invalid-email":          "Please enter a valid email.",
  "auth/popup-closed-by-user":   "Google sign-in was cancelled.",
  "auth/network-request-failed": "Network error — check your connection.",
  "auth/too-many-requests":      "Too many attempts. Try again later.",
};

const friendlyRtkError = (err: unknown): string => {
  if (!err) return "";
  const authErr = (err as { data?: unknown })?.data as AuthError | undefined;
  if (authErr?.code) return FIREBASE_ERRORS[authErr.code] ?? authErr.message;
  const plain = (err as { error?: string })?.error;
  if (plain) return plain;
  return "Something went wrong. Please try again.";
};

const CHIPS: ChipItem[] = [
  { label: "Firebase Auth",  active: true  },
  { label: "Firestore DB",   active: false },
  { label: "CSS Variables",  active: true  },
  { label: "Web Components", active: false },
  { label: "ES Modules",     active: true  },
  { label: "Canvas API",     active: false },
];

const BRAND_DOT_COLORS = ["#e8ff47", "#47ffe8", "rgba(255,255,255,.07)", "rgba(255,255,255,.07)"];

// ── SVG Icons ────────────────────────────────────────────────────────────────

const IconMail: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={styles.inputIcon as CSSProperties}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconLock: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={styles.inputIcon as CSSProperties}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconEye: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconEyeOff: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const GoogleLogo: FC = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// ── Animated canvas background ───────────────────────────────────────────────

const BgCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const dotsRef   = useRef<Dot[]>([]);
  const sizeRef   = useRef<{ W: number; H: number }>({ W: 0, H: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initDots = (W: number, H: number) => {
      dotsRef.current = Array.from<unknown, Dot>({ length: Math.floor((W * H) / 8000) }, () => ({
        x: Math.random() * W,           y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,   o: Math.random(),
      }));
    };

    const resize = () => {
      const W = (canvas.width  = window.innerWidth);
      const H = (canvas.height = window.innerHeight);
      sizeRef.current = { W, H };
      initDots(W, H);
    };

    const draw = () => {
      const { W, H } = sizeRef.current;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,255,255,0.025)"; ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
      for (const d of dotsRef.current) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,255,71,${d.o * 0.3})`; ctx.fill();
      }
      const g1 = ctx.createRadialGradient(W*.15,H*.3,0,W*.15,H*.3,320);
      g1.addColorStop(0,"rgba(232,255,71,0.06)"); g1.addColorStop(1,"transparent");
      ctx.fillStyle = g1; ctx.fillRect(0,0,W,H);
      const g2 = ctx.createRadialGradient(W*.85,H*.7,0,W*.85,H*.7,260);
      g2.addColorStop(0,"rgba(71,255,232,0.05)"); g2.addColorStop(1,"transparent");
      ctx.fillStyle = g2; ctx.fillRect(0,0,W,H);
      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize(); draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(rafRef.current); };
  }, []);

  return <canvas ref={canvasRef} style={styles.canvas as CSSProperties} />;
};

// ── Reusable atoms ───────────────────────────────────────────────────────────

const InputField: FC<InputFieldProps> = ({ label, type, value, onChange, placeholder, autoComplete, icon, rightSlot }) => (
  <div style={styles.field as CSSProperties}>
    <label style={styles.fieldLabel as CSSProperties}>{label}</label>
    <div style={styles.inputWrap as CSSProperties}>
      {icon}
      <input
        type={type} value={value} onChange={onChange}
        placeholder={placeholder} autoComplete={autoComplete}
        style={styles.input as CSSProperties}
        onFocus={(e: FocusEvent<HTMLInputElement>) => { e.target.style.borderColor = "rgba(232,255,71,.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(232,255,71,.06)"; }}
        onBlur={(e: FocusEvent<HTMLInputElement>)  => { e.target.style.borderColor = "rgba(255,255,255,.07)"; e.target.style.boxShadow = "none"; }}
      />
      {rightSlot}
    </div>
  </div>
);

const GoogleButton: FC<GoogleButtonProps> = ({ label, loading, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button disabled={loading} onClick={onClick}
      style={{ ...(styles.btnGoogle as CSSProperties), ...(hov ? styles.btnGoogleHov as CSSProperties : {}) }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <GoogleLogo /> {label}
    </button>
  );
};

const Divider: FC = () => (
  <div style={styles.divider as CSSProperties}>
    <span style={styles.dividerLine as CSSProperties} /> or <span style={styles.dividerLine as CSSProperties} />
  </div>
);

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, loading = false, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button disabled={loading} onClick={onClick}
      style={{
        ...(styles.btnPrimary as CSSProperties),
        ...(hov && !loading ? styles.btnPrimaryHov as CSSProperties : {}),
        ...(loading          ? styles.btnPrimaryDisabled as CSSProperties : {}),
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {loading && <span style={styles.spinner as CSSProperties} className="btn-spinner" />}
      {label}
    </button>
  );
};

const ErrorMsg: FC<{ text: string | null }> = ({ text }) => (
  <div style={styles.errorMsg as CSSProperties}>{text ?? ""}</div>
);

const FooterLink: FC<FooterLinkProps> = ({ label, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <a href="#"
      onClick={(e: MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); onClick(); }}
      style={{ ...(styles.footerLink as CSSProperties), ...(hov ? { opacity: 0.6 } : {}) }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
    </a>
  );
};

// ── Sign-in panel ────────────────────────────────────────────────────────────

const SignInPanel: FC<SignInPanelProps> = ({ onSwitch }) => {
  const dispatch = useAppDispatch();

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [pwShow,   setPwShow]   = useState(false);
  const [localErr, setLocalErr] = useState("");

  const [signIn,       { isLoading: signingIn,     error: signInErr   }] = useSignInMutation();
  const [googleSignIn, { isLoading: googleLoading, error: googleErr   }] = useGoogleSignInMutation();
  const [forgotPw,     { isLoading: forgotLoading, error: forgotErr,
                         isSuccess: forgotOk }]                           = useForgotPasswordMutation();

  const loading   = signingIn || googleLoading || forgotLoading;
  const apiError  = signInErr ?? googleErr ?? forgotErr;
  const errorText = localErr
    || (forgotOk ? "✔ Reset link sent — check your inbox." : "")
    || friendlyRtkError(apiError);

  const handleSignIn = async () => {
    setLocalErr("");
    if (!email || !password) { setLocalErr("Please fill in all fields."); return; }
    dispatch(clearError());
    await signIn({ email, password });
  };

  const handleGoogle = async () => {
    setLocalErr(""); dispatch(clearError());
    await googleSignIn();
  };

  const handleForgot = async () => {
    setLocalErr("");
    if (!email) { setLocalErr("Enter your email above first."); return; }
    dispatch(clearError());
    await forgotPw({ email });
  };

  return (
    <div style={styles.panel as CSSProperties}>
      <div style={styles.cardLabel as CSSProperties}>Welcome back</div>
      <div style={styles.cardTitle as CSSProperties}>Sign in</div>

      <GoogleButton label="Continue with Google" loading={loading} onClick={handleGoogle} />
      <Divider />

      <InputField label="Email" type="email" value={email}
        onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
        autoComplete="email" icon={<IconMail />} />
      <InputField label="Password" type={pwShow ? "text" : "password"}
        value={password} onChange={e => setPassword(e.target.value)}
        placeholder="••••••••" autoComplete="current-password" icon={<IconLock />}
        rightSlot={
          <button style={styles.togglePw as CSSProperties} type="button"
            onClick={() => setPwShow(v => !v)} aria-label="Toggle password">
            {pwShow ? <IconEyeOff /> : <IconEye />}
          </button>
        } />

      <PrimaryButton label="Sign in" loading={loading} onClick={handleSignIn} />
      <ErrorMsg text={errorText} />

      <div style={styles.cardFooter as CSSProperties}>
        <FooterLink label="Forgot password?" onClick={handleForgot} />
        <FooterLink label="Create account →" onClick={() => onSwitch("signup")} />
      </div>
    </div>
  );
};

// ── Sign-up panel ────────────────────────────────────────────────────────────

const SignUpPanel: FC<SignUpPanelProps> = ({ onSwitch }) => {
  const dispatch = useAppDispatch();

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [localErr, setLocalErr] = useState("");

  const [signUp,       { isLoading: signingUp,     error: signUpErr  }] = useSignUpMutation();
  const [googleSignIn, { isLoading: googleLoading, error: googleErr  }] = useGoogleSignInMutation();

  const loading   = signingUp || googleLoading;
  const errorText = localErr || friendlyRtkError(signUpErr ?? googleErr);

  const handleSignUp = async () => {
    setLocalErr("");
    if (!email || !password) { setLocalErr("Please fill in all fields."); return; }
    dispatch(clearError());
    await signUp({ email, password });
  };

  const handleGoogle = async () => {
    setLocalErr(""); dispatch(clearError());
    await googleSignIn();
  };

  return (
    <div style={styles.panel as CSSProperties}>
      <div style={styles.cardLabel as CSSProperties}>New here?</div>
      <div style={styles.cardTitle as CSSProperties}>Create account</div>

      <GoogleButton label="Sign up with Google" loading={loading} onClick={handleGoogle} />
      <Divider />

      <InputField label="Email" type="email" value={email}
        onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
        autoComplete="email" icon={<IconMail />} />
      <InputField label="Password" type="password" value={password}
        onChange={e => setPassword(e.target.value)} placeholder="min. 6 characters"
        autoComplete="new-password" icon={<IconLock />} />

      <PrimaryButton label="Create account" loading={loading} onClick={handleSignUp} />
      <ErrorMsg text={errorText} />

      <div style={{ ...(styles.cardFooter as CSSProperties), justifyContent: "flex-end" }}>
        <FooterLink label="← Back to sign in" onClick={() => onSwitch("signin")} />
      </div>
    </div>
  );
};

// ── Success panel ────────────────────────────────────────────────────────────

const SuccessPanel: FC<SuccessPanelProps> = ({ user }) => {
  const [logOut, { isLoading }] = useLogOutMutation();
  const navigate = useNavigate();
  return (
    <div style={{ ...(styles.panel as CSSProperties), textAlign: "center" }}>
      <div style={styles.successIcon as CSSProperties}>✦</div>
      <div style={styles.successTitle as CSSProperties}>You're in!</div>
      <div style={styles.successEmail as CSSProperties}>{user.displayName ?? user.email}</div>
      <PrimaryButton label="Open StyleLab →" onClick={() => { navigate('/dashboard') }} />
      <div style={{ marginTop: 14 }}>
        <button style={styles.btnOutline as CSSProperties} disabled={isLoading}
          onClick={() => void logOut()}>
          {isLoading ? "Signing out…" : "Sign out"}
        </button>
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────

const LoginPage: FC<LoginPageProps> = ({ onSuccess }) => {
  const user         = useAppSelector(selectUser);
  const initialising = useAppSelector(selectInitialising);
  const [panel, setPanel] = useState<PanelName>("signin");

  console.log("login page rendered=====>");
  useEffect(() => {
    if (user) { setPanel(()=>"success"); onSuccess?.(user); }
    else      { setPanel("signin"); }
  }, [user, onSuccess]);

  if (initialising) {
    return (
      <div style={{ ...(styles.root as CSSProperties), display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="btn-spinner"
          style={{ width: 32, height: 32, border: "3px solid rgba(255,255,255,.1)", borderTopColor: "#e8ff47", borderRadius: "50%", display: "inline-block" }} />
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow: hidden; }
        input[type="email"]:focus, input[type="password"]:focus, input[type="text"]:focus { outline: none; }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
        @keyframes pulse   { 0%,100%{ opacity:1; } 50%{ opacity:.4; } }
        @keyframes spin    { to { transform:rotate(360deg); } }
        .brand-col  { animation: fadeUp .8s ease both; }
        .card-wrap  { animation: fadeUp .9s .1s ease both; }
        .deco-col   { animation: fadeUp .8s .2s ease both; }
        .panel-body { animation: fadeIn .3s ease; }
        .pulse-dot  { animation: pulse 2s infinite; }
        .btn-spinner { animation: spin .6s linear infinite; }
        @media (max-width: 900px) {
          .deco-col { display: none !important; }
          .stage    { grid-template-columns: 1fr !important; justify-items: center; overflow-y: auto; padding: 40px 20px !important; }
          .brand-col{ padding: 0 !important; text-align: center; }
          body { overflow: auto; }
        }
      `}</style>

      <div style={styles.root as CSSProperties}>
        <BgCanvas />
        <div className="stage" style={styles.stage as CSSProperties}>

          {/* Brand */}
          <div className="brand-col" style={styles.brandCol as CSSProperties}>
            <div style={styles.brandBadge as CSSProperties}>
              <span className="pulse-dot" style={styles.pulseDot as CSSProperties} />
              POC Platform
            </div>
            <h1 style={styles.brandTitle as CSSProperties}>
              Style<em style={{ fontStyle: "normal", color: "#e8ff47" }}>Lab</em>
            </h1>
            <p style={styles.brandSub as CSSProperties}>
              A sandbox for exploring CSS styling experiments and modern JavaScript patterns.
            </p>
            <div style={styles.brandDots as CSSProperties}>
              {BRAND_DOT_COLORS.map((c, i) => (
                <span key={i} style={{ ...(styles.brandDot as CSSProperties), background: c }} />
              ))}
            </div>
          </div>

          {/* Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="card-wrap" style={styles.card as CSSProperties}>
              <div className="panel-body">
                {panel === "signin"  && <SignInPanel  onSwitch={setPanel} />}
                {panel === "signup"  && <SignUpPanel  onSwitch={setPanel} />}
                {panel === "success" && user && <SuccessPanel user={user} />}
              </div>
            </div>
          </div>

          {/* Deco */}
          <div className="deco-col" style={styles.decoCol as CSSProperties}>
            <div style={styles.decoStack as CSSProperties}>
              {CHIPS.map(({ label, active }) => (
                <div key={label}
                  style={{ ...(styles.decoChip as CSSProperties), ...(active ? styles.decoChipActive as CSSProperties : {}) }}>
                  <span className={active ? "pulse-dot" : ""}
                    style={{ ...(styles.decoChipDot as CSSProperties), background: active ? "#e8ff47" : "#6b7280", boxShadow: active ? "0 0 8px #e8ff47" : "none" }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

// ── Styles ───────────────────────────────────────────────────────────────────

const T = { head: "'Syne', sans-serif", mono: "'DM Mono', monospace" } as const;

const styles: Record<string, CSSProperties> = {
  root:               { minHeight:"100vh", background:"#07080d", color:"#f0f0f0", fontFamily:T.head, overflow:"hidden", position:"relative" },
  canvas:             { position:"fixed", inset:0, pointerEvents:"none", zIndex:0 } as CSSProperties,
  stage:              { position:"relative", zIndex:1, minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 480px 1fr", alignItems:"center" },
  brandCol:           { padding:"0 0 0 60px" },
  brandBadge:         { display:"inline-flex", alignItems:"center", gap:8, fontFamily:T.mono, fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"#e8ff47", border:"1px solid rgba(232,255,71,.25)", padding:"6px 14px", borderRadius:999, marginBottom:28 },
  pulseDot:           { width:6, height:6, borderRadius:"50%", background:"#e8ff47" },
  brandTitle:         { fontSize:"clamp(3rem, 5vw, 5rem)", fontWeight:800, lineHeight:0.95, letterSpacing:"-0.03em" },
  brandSub:           { marginTop:20, fontFamily:T.mono, fontWeight:300, fontSize:14, color:"#6b7280", lineHeight:1.8, maxWidth:300 },
  brandDots:          { display:"flex", gap:10, marginTop:36 },
  brandDot:           { width:8, height:8, borderRadius:"50%" },
  card:               { width:"100%", maxWidth:420, background:"#0e1018", border:"1px solid rgba(255,255,255,.07)", borderRadius:24, padding:"40px 36px", boxShadow:"0 32px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03)" },
  panel:              {},
  cardLabel:          { fontFamily:T.mono, fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", color:"#6b7280", marginBottom:10 },
  cardTitle:          { fontSize:28, fontWeight:700, letterSpacing:"-0.02em" },
  btnGoogle:          { display:"flex", alignItems:"center", justifyContent:"center", gap:10, width:"100%", padding:13, marginTop:24, marginBottom:20, background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, color:"#f0f0f0", fontFamily:T.head, fontSize:14, fontWeight:600, cursor:"pointer", transition:"background .2s, border-color .2s, transform .15s" },
  btnGoogleHov:       { background:"rgba(255,255,255,.07)", borderColor:"rgba(255,255,255,.15)", transform:"translateY(-1px)" },
  btnPrimary:         { width:"100%", padding:14, marginTop:6, background:"#e8ff47", color:"#07080d", fontFamily:T.head, fontSize:15, fontWeight:700, border:"none", borderRadius:14, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, transition:"transform .15s, box-shadow .2s, opacity .2s" },
  btnPrimaryHov:      { transform:"translateY(-2px)", boxShadow:"0 10px 30px rgba(232,255,71,.35)" },
  btnPrimaryDisabled: { opacity:0.6, pointerEvents:"none" },
  spinner:            { width:14, height:14, border:"2px solid #07080d", borderTopColor:"transparent", borderRadius:"50%", display:"inline-block", flexShrink:0 },
  btnOutline:         { width:"100%", padding:13, background:"transparent", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, color:"#6b7280", fontFamily:T.head, fontSize:14, fontWeight:600, cursor:"pointer" },
  divider:            { display:"flex", alignItems:"center", gap:12, marginBottom:20, fontFamily:T.mono, fontSize:11, color:"#6b7280" },
  dividerLine:        { flex:1, height:1, background:"rgba(255,255,255,.07)", display:"block" },
  field:              { marginBottom:14 },
  fieldLabel:         { display:"block", fontFamily:T.mono, fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b7280", marginBottom:8 },
  inputWrap:          { position:"relative" },
  inputIcon:          { position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", width:16, height:16, color:"#6b7280", pointerEvents:"none" },
  input:              { width:"100%", padding:"13px 14px 13px 42px", background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:14, color:"#f0f0f0", fontFamily:T.mono, fontSize:14, transition:"border-color .2s, box-shadow .2s" },
  togglePw:           { position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", cursor:"pointer", color:"#6b7280", background:"none", border:"none", padding:0, display:"flex", alignItems:"center" },
  errorMsg:           { fontFamily:T.mono, fontSize:12, color:"#ff6b6b", minHeight:20, marginTop:12, textAlign:"center", lineHeight:1.5 },
  cardFooter:         { display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:20 },
  footerLink:         { fontFamily:T.mono, fontSize:12, color:"#47ffe8", textDecoration:"none", transition:"opacity .2s" },
  successIcon:        { width:64, height:64, background:"rgba(232,255,71,.1)", border:"1px solid rgba(232,255,71,.3)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:28 },
  successTitle:       { fontSize:22, fontWeight:700, marginBottom:8 },
  successEmail:       { fontFamily:T.mono, fontSize:13, color:"#e8ff47", marginBottom:24 },
  decoCol:            { padding:"0 60px 0 0", display:"flex", justifyContent:"flex-end" },
  decoStack:          { display:"flex", flexDirection:"column", gap:10, fontFamily:T.mono, fontSize:11 },
  decoChip:           { display:"flex", alignItems:"center", gap:10, padding:"10px 16px", background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:10, color:"#6b7280", whiteSpace:"nowrap" },
  decoChipActive:     { borderColor:"rgba(232,255,71,.2)", color:"#f0f0f0" },
  decoChipDot:        { width:6, height:6, borderRadius:"50%", flexShrink:0 },
};
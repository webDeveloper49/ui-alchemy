import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const CYAN = '#00b4d8', MAGENTA = '#d400c8';
const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'85vh', textAlign:'center', px:3 }}>
      <Box sx={{ position:'absolute', width:360, height:360, borderRadius:'50%', background:`radial-gradient(circle, rgba(212,0,200,0.07) 0%, transparent 70%)`, pointerEvents:'none' }} />
      <Box sx={{ width:72, height:72, borderRadius:'16px', mb:3, background:'rgba(212,0,200,0.08)', border:'2px solid rgba(212,0,200,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem', boxShadow:`0 4px 20px rgba(212,0,200,0.2)` }}>🔒</Box>
      <Typography sx={{ fontFamily:'Orbitron,sans-serif', fontWeight:800, fontSize:{xs:'1.3rem',sm:'1.7rem'}, letterSpacing:'0.1em', background:`linear-gradient(135deg,${MAGENTA},#9b00d8)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', mb:1.5 }}>
        ACCESS DENIED
      </Typography>
      <Box sx={{ width:60, height:3, background:`linear-gradient(90deg,${MAGENTA},${CYAN})`, mb:3, borderRadius:2 }} />
      <Typography sx={{ fontSize:'0.88rem', color:'#7880a0', fontFamily:'Exo 2,sans-serif', maxWidth:380, lineHeight:1.8, mb:4 }}>
        You don't have clearance to access this section. Contact your administrator if you believe this is an error.
      </Typography>
      <Box sx={{ display:'flex', gap:2, flexWrap:'wrap', justifyContent:'center' }}>
        <Button onClick={()=>navigate(-1 as any)} sx={{ fontFamily:'Orbitron,sans-serif', fontWeight:600, fontSize:'0.7rem', letterSpacing:'0.12em', px:3, py:1.25, color:'#5a6080', border:'1.5px solid #e4e8f5', borderRadius:2, '&:hover':{bgcolor:'rgba(0,180,216,0.05)', borderColor:CYAN} }}>
          GO BACK
        </Button>
        <Button onClick={()=>navigate('/')} sx={{ fontFamily:'Orbitron,sans-serif', fontWeight:700, fontSize:'0.7rem', letterSpacing:'0.12em', px:3, py:1.25, background:`linear-gradient(135deg,${MAGENTA},#9b00d8)`, color:'#fff', borderRadius:2, boxShadow:`0 4px 16px rgba(212,0,200,0.3)`, '&:hover':{transform:'translateY(-2px)', boxShadow:`0 8px 24px rgba(212,0,200,0.4)`}, transition:'all 0.2s' }}>
          DASHBOARD
        </Button>
      </Box>
    </Box>
  );
};
export default UnauthorizedPage;

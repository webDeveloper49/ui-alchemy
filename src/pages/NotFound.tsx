import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const CYAN = '#00b4d8', MAGENTA = '#d400c8';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'85vh', textAlign:'center', px:3 }}>
      <Box sx={{ position:'absolute', width:360, height:360, borderRadius:'50%', background:`radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)`, pointerEvents:'none' }} />
      <Typography sx={{ fontFamily:'Orbitron,sans-serif', fontWeight:900, fontSize:{xs:'5rem',sm:'8rem'}, lineHeight:1, background:`linear-gradient(135deg,${CYAN},${MAGENTA})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', mb:1, letterSpacing:'-4px' }}>
        404
      </Typography>
      <Box sx={{ width:80, height:3, background:`linear-gradient(90deg,${CYAN},${MAGENTA})`, mb:3, borderRadius:2 }} />
      <Typography sx={{ fontFamily:'Orbitron,sans-serif', fontSize:{xs:'0.95rem',sm:'1.1rem'}, fontWeight:700, color:'#0d0d2b', letterSpacing:'0.15em', mb:1.5 }}>
        SIGNAL LOST
      </Typography>
      <Typography sx={{ fontSize:'0.88rem', color:'#7880a0', fontFamily:'Exo 2,sans-serif', maxWidth:340, lineHeight:1.8, mb:4 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button onClick={()=>navigate('/')} sx={{ fontFamily:'Orbitron,sans-serif', fontWeight:700, fontSize:'0.75rem', letterSpacing:'0.15em', px:4, py:1.5, background:`linear-gradient(135deg,${CYAN},${MAGENTA})`, color:'#fff', borderRadius:2, boxShadow:`0 4px 20px rgba(0,180,216,0.35)`, '&:hover':{transform:'translateY(-2px)', boxShadow:`0 8px 30px rgba(0,180,216,0.45)`}, transition:'all 0.2s' }}>
        RETURN TO DASHBOARD
      </Button>
    </Box>
  );
}

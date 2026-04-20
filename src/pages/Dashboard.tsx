import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CYAN    = '#00b4d8';
const MAGENTA = '#d400c8';
const LIME    = '#5cb800';
const PURPLE  = '#6e00e6';

const STATS = [
  { label: 'Components', value: '48',   change: '+12 this week', up: true,  color: CYAN,    bg: 'rgba(0,180,216,0.07)',    icon: '⬡' },
  { label: 'Themes',     value: '6',    change: '+2 this week',  up: true,  color: MAGENTA, bg: 'rgba(212,0,200,0.07)',    icon: '◈' },
  { label: 'Tokens',     value: '320',  change: '+40 updated',   up: true,  color: LIME,    bg: 'rgba(92,184,0,0.07)',     icon: '◆' },
  { label: 'Build Time', value: '1.2s', change: '-0.3s faster',  up: true,  color: PURPLE,  bg: 'rgba(110,0,230,0.07)',    icon: '⚡' },
];

const QUICK_LINKS = [
  { label: 'Custom Loader', route: '/customised-loader', color: CYAN,    bg: 'rgba(0,180,216,0.06)',  desc: 'Animated loader components' },
  { label: 'Dashboard',     route: '/dashboard',         color: MAGENTA, bg: 'rgba(212,0,200,0.06)', desc: 'Overview & analytics' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, minHeight: '100%' }}>

      {/* Hero greeting */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{
          fontFamily: 'Orbitron, sans-serif', fontWeight: 900,
          fontSize: { xs: '1.5rem', md: '2rem' }, color: '#0d0d2b', lineHeight: 1.2, mb: 0.75,
        }}>
          Welcome to{' '}
          <Box component="span" sx={{
            background: `linear-gradient(135deg, ${CYAN}, ${MAGENTA})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            UI-Alchemy
          </Box>
        </Typography>
        <Typography sx={{ color: '#8890b0', fontSize: '0.88rem', fontFamily: 'Exo 2, sans-serif' }}>
          Your neon-powered design system dashboard
        </Typography>
      </Box>

      {/* Stat cards */}
      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        {STATS.map(s => (
          <Grid item xs={12} sm={6} lg={3} key={s.label}>
            <Box sx={{
              p: 2.5, borderRadius: 3, bgcolor: '#fff',
              border: `1.5px solid ${s.color}22`,
              boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px ${s.color}10`,
              position: 'relative', overflow: 'hidden',
              transition: 'all 0.25s ease',
              transformStyle: 'preserve-3d',
              '&:hover': {
                transform: 'perspective(600px) translateY(-5px) rotateX(3deg)',
                border: `1.5px solid ${s.color}55`,
                boxShadow: `0 16px 40px rgba(0,0,0,0.1), 0 0 20px ${s.color}18`,
              },
              '&::before': {
                content: '""', position: 'absolute',
                top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
              },
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography sx={{ fontSize: '0.68rem', color: '#9ca3c8', fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {s.label}
                </Typography>
                <Box sx={{
                  width: 36, height: 36, borderRadius: '10px',
                  bgcolor: s.bg, border: `1.5px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                }}>
                  {s.icon}
                </Box>
              </Box>
              <Typography sx={{
                fontFamily: 'Orbitron, sans-serif', fontWeight: 800,
                fontSize: '2rem', color: s.color, lineHeight: 1, mb: 0.5,
                filter: `drop-shadow(0 0 8px ${s.color}50)`,
              }}>
                {s.value}
              </Typography>
              <Typography sx={{ fontSize: '0.72rem', color: s.up ? '#22aa55' : MAGENTA, fontFamily: 'Exo 2, sans-serif' }}>
                {s.up ? '↑' : '↓'} {s.change}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Quick access */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.68rem', color: CYAN, letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2 }}>
          Quick Access
        </Typography>
        <Grid container spacing={2}>
          {QUICK_LINKS.map(link => (
            <Grid item xs={12} sm={6} key={link.label}>
              <Box onClick={() => navigate(link.route)} sx={{
                p: 2.5, borderRadius: 2.5, cursor: 'pointer', bgcolor: '#fff',
                border: `1.5px solid ${link.color}18`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: 2,
                '&:hover': {
                  border: `1.5px solid ${link.color}50`,
                  bgcolor: link.bg,
                  transform: 'translateX(4px)',
                  boxShadow: `0 4px 20px ${link.color}15`,
                },
              }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: link.color, flexShrink: 0, boxShadow: `0 0 8px ${link.color}` }} />
                <Box>
                  <Typography sx={{ color: link.color, fontWeight: 700, fontSize: '0.88rem', fontFamily: 'Exo 2, sans-serif' }}>
                    {link.label}
                  </Typography>
                  <Typography sx={{ color: '#9ca3c8', fontSize: '0.72rem' }}>{link.desc}</Typography>
                </Box>
                <Box sx={{ ml: 'auto', color: `${link.color}70`, fontSize: '1.1rem' }}>→</Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Status bar */}
      <Box sx={{
        p: 2, borderRadius: 2, bgcolor: '#fff',
        border: '1.5px solid rgba(0,180,216,0.12)',
        display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap',
      }}>
        {['Firebase Connected', 'Redux Active', 'MUI v5', 'Vite HMR'].map(s => (
          <Box key={s} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#22cc66', boxShadow: '0 0 5px #22cc66' }} />
            <Typography sx={{ fontSize: '0.68rem', color: '#9ca3c8', fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.08em' }}>
              {s}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// styles/ThemePicker.tsx — Theme mode toggle + accent picker (pure MUI theme)

import { useState } from 'react';
import {
  IconButton, Tooltip, Popover, Box, Typography,
  ToggleButtonGroup, ToggleButton, Divider, useTheme,
  alpha,
} from '@mui/material';
import PaletteIcon   from '@mui/icons-material/Palette';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon  from '@mui/icons-material/DarkMode';
import CheckIcon     from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { colorPalette, type AccentName } from './tokensColorPalette';
import { DarkLookingAccentColors } from '../constants/DarkLookingTheme.constant';
import { setAccent, setMode } from '../app/themeSlice';


const ACCENT_ORDER = Object.keys(colorPalette) as AccentName[];

export default function ThemePicker() {
  const theme    = useTheme();
  const dispatch = useDispatch();
  const { mode, accent } = useSelector((s: RootState) => s.theme);
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const open    = Boolean(anchor);
  const p:any       = theme.palette.primary;   // full ColorState on primary
  const current = colorPalette[accent];
  const isDarkLooking = DarkLookingAccentColors.includes(theme.app.accent) && theme.palette.mode === 'dark';

  return (
    <>
      {/* ── Mode toggle ─────────────────────────────────────────────────── */}
      <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
        <IconButton
          size="small"
          onClick={() => dispatch(setMode(mode === 'light' ? 'dark' : 'light'))}
          sx={{
            color:        theme.palette.text.secondary,
            borderRadius: theme.shape.borderRadius,
            width:        32,
            height:       32,
            transition:   theme.transitions.create(['background-color', 'color'], {
              duration: theme.transitions.duration.shorter,
            }),
            '&:hover': {
              bgcolor: isDarkLooking ? alpha('#FFFFFF', 0.5) : theme.palette.action.hover,
              color:   p.main,
            },
          }}
        >
          {mode === 'light'
            ? <DarkModeIcon  fontSize="small" />
            : <LightModeIcon fontSize="small" />}
        </IconButton>
      </Tooltip>

      {/* ── Accent picker trigger ────────────────────────────────────────── */}
      
      <Tooltip title="Theme color">
        <IconButton
          size="small"
          onClick={(e) => setAnchor(e.currentTarget)}
          sx={{
            borderRadius: theme.shape.borderRadius,
            width:  32,
            height: 32,
            transition: theme.transitions.create('background-color', {
              duration: theme.transitions.duration.shorter,
            }),
            '&:hover': { 
              bgcolor: isDarkLooking ? alpha('#FFFFFF', 0.5) : theme.palette.action.hover,
            },
          }}
        >
          <PaletteIcon 
            sx={{ 
              fontSize: 18, 
              color: isDarkLooking ? alpha('#FFFFFF', 0.6) : theme.palette.primary.main,
              '&:hover': { 
                color: theme.palette.primary.main,
              },
            }} />
        </IconButton>
      </Tooltip>

      {/* ── Popover ──────────────────────────────────────────────────────── */}
      <Popover
        open={open}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt:         1,
              minWidth:   248,
              border:     `1px solid ${theme.palette.divider}`,
              borderRadius: 5,
              boxShadow:  theme.shadows[8],
              bgcolor:    theme.palette.background.paper,
              overflow:   'visible',
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>

          {/* Header */}
          <Typography sx={{
            fontSize:      theme.typography.caption.fontSize,
            fontWeight:    700,
            color:         theme.palette.text.secondary,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            mb:            1.5,
          }}>
            Appearance
          </Typography>

          {/* Light / Dark toggle */}
          <ToggleButtonGroup
            exclusive
            value={mode}
            onChange={(_, v) => v && dispatch(setMode(v))}
            fullWidth
            size="small"
            sx={{
              mb: 2,
              '& .MuiToggleButton-root': {
                flex:          1,
                gap:           0.75,
                fontSize:      theme.typography.caption.fontSize,
                fontWeight:    600,
                color:         theme.palette.text.secondary,
                borderColor:   theme.palette.divider,
                textTransform: 'none',
                py:            0.75,
                transition:    theme.transitions.create(
                  ['background-color', 'color', 'border-color'],
                  { duration: theme.transitions.duration.shorter },
                ),
                '&.Mui-selected': {
                  background:  p.glass,
                  color:       p.main,
                  borderColor: 'transparent',
                  fontWeight:  700,
                },
                '&.Mui-selected:hover': {
                  background: p.glass,
                  color:      p.main,
                },
              },
            }}
          >
            <ToggleButton value="light">
              <LightModeIcon sx={{ fontSize: 14 }} /> Light
            </ToggleButton>
            <ToggleButton value="dark">
              <DarkModeIcon  sx={{ fontSize: 14 }} /> Dark
            </ToggleButton>
          </ToggleButtonGroup>

          <Divider sx={{ borderColor: theme.palette.divider, mb: 2 }} />

          {/* Accent label row */}
          <Box sx={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            mb:             1.5,
          }}>
            <Typography sx={{
              fontSize:      theme.typography.caption.fontSize,
              fontWeight:    700,
              color:         theme.palette.text.secondary,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Accent Color
            </Typography>
            <Typography sx={{
              fontSize:      theme.typography.caption.fontSize,
              fontWeight:    600,
              color:         p.main,
              textTransform: 'capitalize',
            }}>
              {current.label}
            </Typography>
          </Box>

          {/* Color swatches — 5 × 2 grid */}
          <Box sx={{
            display:             'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap:                 1,
          }}>
            {ACCENT_ORDER.map((a) => {
              const pal      = colorPalette[a];
              const isActive = a === accent;
              return (
                <Tooltip key={a} title={pal.label} placement="top" arrow>
                  <Box
                    onClick={() => dispatch(setAccent(a))}
                    sx={{
                      position:     'relative',
                      width:        36,
                      height:       36,
                      borderRadius: theme.shape.borderRadius,
                      background:   `linear-gradient(135deg, ${pal[400]} 0%, ${pal[600]} 100%)`,
                      cursor:       'pointer',
                      display:      'flex',
                      alignItems:   'center',
                      justifyContent: 'center',
                      transition:   theme.transitions.create(
                        ['transform', 'box-shadow'],
                        { duration: theme.transitions.duration.shorter },
                      ),
                      boxShadow: isActive
                        ? `0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${pal[500]}`
                        : `0 2px 6px ${pal[600]}44`,
                      transform: isActive ? 'scale(1.12)' : 'scale(1)',
                      '&:hover': {
                        transform:  'scale(1.08)',
                        boxShadow:  `0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${pal[400]}`,
                      },
                    }}
                  >
                    {isActive && (
                      <CheckIcon sx={{
                        fontSize: 14,
                        color:    '#fff',
                        filter:   'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                      }} />
                    )}
                  </Box>
                </Tooltip>
              );
            })}
          </Box>

          {/* Preview strip */}
          <Box sx={{
            mt:          2,
            p:           1.5,
            background:  `linear-gradient(135deg, ${p['500']} 0%, ${p['700']} 100%)`,
            borderRadius: theme.shape.borderRadius,
            display:     'flex',
            alignItems:  'center',
            gap:         1,
          }}>
            <Box sx={{
              width:          24,
              height:         24,
              borderRadius:   '50%',
              bgcolor:        'rgba(255,255,255,0.20)',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              flexShrink:     0,
            }}>
              <PaletteIcon sx={{ fontSize: 12, color: '#fff' }} />
            </Box>
            <Box>
              <Typography sx={{
                fontSize:   theme.typography.caption.fontSize,
                fontWeight: 700,
                color:      '#fff',
                lineHeight: 1.2,
              }}>
                {current.label} — {mode === 'dark' ? 'Dark' : 'Light'} Mode
              </Typography>
              <Typography sx={{
                fontSize:   '0.60rem',
                color:      'rgba(255,255,255,0.70)',
                lineHeight: 1,
              }}>
                {current.hex}
              </Typography>
            </Box>
          </Box>

        </Box>
      </Popover>
    </>
  );
}
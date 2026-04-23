import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box, Collapse, IconButton, List, ListItemButton,
  ListItemIcon, ListItemText, Tooltip, Typography,
} from '@mui/material';
import DashboardIcon    from '@mui/icons-material/DashboardOutlined';
import AutoAwesomeIcon  from '@mui/icons-material/AutoAwesome';

import ExpandLessIcon   from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon   from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon  from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoopIcon from '@mui/icons-material/Loop';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface Props {
  collapsed:    boolean;
  setCollapsed: (v: boolean) => void;
  onToggle:     () => void;
  isMobile:     boolean;
}

interface NavItem {
  label:     string;
  icon:      React.ReactNode;
  route?:    string;
  children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',          icon: <DashboardIcon />, route: '/dashboard' },
  { label: 'Custom Components',  icon: <AutoAwesomeIcon />, children: [
    { label: 'Loader', icon: <LoopIcon />, route: '/customised-loader' },
    { label: 'SVG', icon: <AgricultureIcon/>, route:'/customised-svg'},
  ]},
  { label: 'Tutorials',  icon: <AutoAwesomeIcon />, children: [
    { label: 'SVG Filters', icon: <AgricultureIcon/>, route:'/svg-filters'},
    { label: 'Advanced SVG', icon:<AutoFixHighIcon/>, route:'/advanced-svg'},
    { label: 'SVG Exercises', icon:<AutoFixHighIcon/>, route:'/svg-exercises'},
  ]},
];

const CYAN    = '#00b4d8';
const MAGENTA = '#d400c8';
const BG_ACTIVE = 'rgba(0,180,216,0.08)';
const BG_HOVER  = 'rgba(0,180,216,0.05)';

export default function SidebarMenu({ collapsed, onToggle, isMobile }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({});

  const toggleGroup = (label: string) => {
    setOpenGroups(prev => {
      // if already open → close it
      if (prev[label]) return {};

      // else → open only this one
      return { [label]: true };
    });
  };

  const isActive = (path?: string) =>
    path ? (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)) : false;

  const isGroupActive = (item: NavItem) =>
    item.children?.some(c => c.route && location.pathname.startsWith(c.route)) ?? false;

  const mini = collapsed && !isMobile;

  React.useEffect(() => {
    const activeGroup = NAV_ITEMS.find(item =>
      item.children?.some(c => c.route && location.pathname.startsWith(c.route))
    );

    if (activeGroup) {
      setOpenGroups({ [activeGroup.label]: true });
    }
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: '#fff' }}>

      {/* ── Logo ─────────────────────────────────────────────────────────── */}
      <Box
        onClick={() => navigate('/')}
        sx={{
          height: 72, display: 'flex', alignItems: 'center',
          px: mini ? 0 : 2.5, justifyContent: mini ? 'center' : 'flex-start',
          gap: 1.5, cursor: 'pointer',
          borderBottom: '1px solid #e8edf8',
          position: 'relative', overflow: 'hidden',
          transition: 'background 0.2s',
          '&:hover': { bgcolor: 'rgba(0,180,216,0.04)' },
        }}
      >
        {/* Logo mark */}
        <Box sx={{ width: 38, height: 38, flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Outer spinning ring */}
          <Box sx={{
            position: 'absolute', inset: -2,
            border: `1.5px solid ${CYAN}`,
            borderRadius: '50%', borderTopColor: 'transparent',
            animation: 'rotate-slow 4s linear infinite',
            boxShadow: `0 0 8px rgba(0,180,216,0.4)`,
          }} />
          <Box sx={{
            width: 30, height: 30, borderRadius: '8px',
            background: `linear-gradient(135deg, ${CYAN} 0%, ${MAGENTA} 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 4px 16px rgba(0,180,216,0.4)`,
            transform: 'rotate(45deg)',
          }}>
            <Box sx={{ transform: 'rotate(-45deg)', color: '#fff', fontWeight: 900, fontSize: '0.68rem', fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              UA
            </Box>
          </Box>
        </Box>

        {!mini && (
          <Box>
            <Typography sx={{
              fontFamily: 'Orbitron, sans-serif', fontWeight: 800,
              fontSize: '0.92rem', letterSpacing: '0.04em',
              background: `linear-gradient(135deg, ${CYAN}, ${MAGENTA})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              lineHeight: 1.2, whiteSpace: 'nowrap',
            }}>
              UI-Alchemy
            </Typography>
            <Typography sx={{
              fontSize: '0.58rem', color: 'rgba(0,180,216,0.6)',
              fontFamily: 'Exo 2, sans-serif', letterSpacing: '0.2em',
              textTransform: 'uppercase', lineHeight: 1.2,
            }}>
              Design System
            </Typography>
          </Box>
        )}
      </Box>

      {/* ── Collapse toggle ─────────────────────────────────────────────── */}
      {!isMobile && (
        <Box sx={{ display: 'flex', justifyContent: mini ? 'center' : 'flex-end', px: mini ? 0 : 1, pt: 1, pb: 0.5 }}>
          <Tooltip title={mini ? 'Expand' : 'Collapse'} placement="right">
            <IconButton size="small" onClick={onToggle} sx={{
              width: 28, height: 28,
              border: '1.5px solid #e4e8f5', borderRadius: 1.5,
              color: '#9ca3c8', transition: 'all 0.2s',
              '&:hover': { borderColor: CYAN, color: CYAN, bgcolor: 'rgba(0,180,216,0.06)', boxShadow: `0 0 10px rgba(0,180,216,0.2)` },
            }}>
              {mini ? <ChevronRightIcon sx={{ fontSize: 15 }} /> : <ChevronLeftIcon sx={{ fontSize: 15 }} />}
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {/* ── Nav list ────────────────────────────────────────────────────── */}
      <Box sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', py: 1, px: mini ? 0.5 : 1 }}>
        <List disablePadding>
          {NAV_ITEMS.map(item => {
            const active      = isActive(item.route);
            const groupActive = isGroupActive(item);
            const hasKids     = !!item.children?.length;
            const isOpen = !!openGroups[item.label];
            const lit         = active || groupActive;

            const btn = (
              <ListItemButton
                onClick={() => { if (hasKids) toggleGroup(item.label); else if (item.route) navigate(item.route); }}
                sx={{
                  borderRadius: 2, mb: 0.5, minHeight: 44,
                  px: mini ? 0 : 1.5,
                  justifyContent: mini ? 'center' : 'flex-start',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  bgcolor: lit ? BG_ACTIVE : 'transparent',
                  border: lit ? `1.5px solid rgba(0,180,216,0.22)` : '1.5px solid transparent',
                  boxShadow: lit ? `0 2px 16px rgba(0,180,216,0.12), inset 0 0 16px rgba(0,180,216,0.04)` : 'none',
                  '&::before': lit ? {
                    content: '""', position: 'absolute',
                    left: 0, top: '18%', bottom: '18%', width: '3px',
                    background: `linear-gradient(180deg, ${CYAN}, ${MAGENTA})`,
                    borderRadius: '0 3px 3px 0',
                    boxShadow: `0 0 8px ${CYAN}`,
                  } : {},
                  '&:hover': {
                    bgcolor: lit ? BG_ACTIVE : BG_HOVER,
                    border: `1.5px solid rgba(0,180,216,0.18)`,
                    transform: 'translateX(2px)',
                    boxShadow: '0 2px 12px rgba(0,180,216,0.10)',
                  },
                }}
              >
                <ListItemIcon sx={{
                  minWidth: mini ? 'unset' : 36,
                  color: lit ? CYAN : '#9ca3c8',
                  '& svg': { fontSize: 20, filter: lit ? `drop-shadow(0 0 4px ${CYAN})` : 'none', transition: 'all 0.2s' },
                  transition: 'color 0.2s',
                }}>
                  {item.icon}
                </ListItemIcon>

                {!mini && (
                  <>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '0.82rem',
                        fontWeight: lit ? 700 : 500,
                        fontFamily: 'Exo 2, sans-serif',
                        color: lit ? CYAN : '#2d3060',
                        noWrap: true,
                      }}
                    />
                    {hasKids && (
                      isOpen
                        ? <ExpandLessIcon sx={{ fontSize: 15, color: 'rgba(0,180,216,0.5)' }} />
                        : <ExpandMoreIcon sx={{ fontSize: 15, color: '#c0c6e0' }} />
                    )}
                  </>
                )}
              </ListItemButton>
            );

            return (
              <React.Fragment key={item.label}>
                {mini ? <Tooltip title={item.label} placement="right" arrow><span>{btn}</span></Tooltip> : btn}

                {/* Children */}
                {hasKids && !mini && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ pl: 2, mt: 0.25, mb: 0.5 }}>
                      {item.children!.map(child => {
                        const ca = location.pathname === child.route;
                        return (
                          <ListItemButton
                            key={child.route}
                            onClick={() => child.route && navigate(child.route)}
                            sx={{
                              borderRadius: 1.5, mb: 0.25, py: 0.7, px: 1.5,
                              bgcolor:   ca ? 'rgba(212,0,200,0.07)' : 'transparent',
                              border:    ca ? '1px solid rgba(212,0,200,0.2)' : '1px solid transparent',
                              transition: 'all 0.18s ease',
                              '&:hover': { bgcolor: 'rgba(212,0,200,0.05)', border: '1px solid rgba(212,0,200,0.15)', transform: 'translateX(2px)' },
                            }}
                          >
                            {/* <ListItemIcon sx={{ minWidth: 28 }}>
                              <Box sx={{
                                width: ca ? 7 : 5, height: ca ? 7 : 5, borderRadius: '50%',
                                bgcolor: ca ? MAGENTA : '#c8ceea',
                                boxShadow: ca ? `0 0 6px ${MAGENTA}` : 'none',
                                transition: 'all 0.2s',
                              }} />
                            </ListItemIcon> */}

                            <ListItemIcon sx={{
                              minWidth: mini ? 'unset' : 36,
                              color: lit ? MAGENTA : '#9ca3c8',
                              '& svg': { fontSize: 20, filter: lit ? `drop-shadow(0 0 4px ${MAGENTA})` : 'none', transition: 'all 0.2s' },
                              transition: 'color 0.2s',
                            }}>
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={child.label}
                              primaryTypographyProps={{
                                fontSize: '0.78rem', fontWeight: ca ? 700 : 400,
                                fontFamily: 'Exo 2, sans-serif',
                                color: ca ? MAGENTA : '#6b7290',
                              }}
                            />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Box>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      {!mini && (
        <Box sx={{
          px: 2, py: 1.75, borderTop: '1px solid #e8edf8',
          display: 'flex', alignItems: 'center', gap: 1,
        }}>
          <Box sx={{
            width: 6, height: 6, borderRadius: '50%',
            bgcolor: '#22cc66', boxShadow: '0 0 7px #22cc66',
            animation: 'neon-pulse 2s infinite',
          }} />
          <Typography sx={{ fontSize: '0.62rem', color: 'rgba(0,180,216,0.5)', fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.1em' }}>
            SYSTEM ONLINE
          </Typography>
        </Box>
      )}
    </Box>
  );
}

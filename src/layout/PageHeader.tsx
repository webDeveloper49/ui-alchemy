import React from 'react';
import {
  Avatar, Box, Divider, IconButton, Menu,
  MenuItem, Tooltip, Typography,
} from '@mui/material';
import MenuIcon                  from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownIcon     from '@mui/icons-material/KeyboardArrowDown';
import Logout                    from '@mui/icons-material/Logout';
import PersonOutlineIcon         from '@mui/icons-material/PersonOutline';
import ThemePicker               from '../styles/ThemePicker';
import { useAppSelector }        from '../app/store';

interface PageHeaderProps {
  title:        string;
  onLogout:     () => void;
  onMenuToggle: () => void;
  sidebarOpen:  boolean;
}

const CYAN    = '#00b4d8';
const MAGENTA = '#d400c8';

export default function PageHeader({ title, onLogout, onMenuToggle }: PageHeaderProps) {
  const [anchorEl,    setAnchorEl]    = React.useState<null | HTMLElement>(null);
  const [notifAnchor, setNotifAnchor] = React.useState<null | HTMLElement>(null);

  const user        = useAppSelector(s => s.auth.user);
  const email       = user?.email ?? 'admin@ui-alchemy.dev';
  const displayName = user?.displayName ?? email.split('@')[0];
  const initials    = displayName.charAt(0).toUpperCase();

  const notifications = [
    { id: 1, type: 'warn',  msg: 'Component render threshold exceeded', time: '5 min ago' },
    { id: 2, type: 'info',  msg: 'Theme system updated successfully',   time: '20 min ago' },
    { id: 3, type: 'alert', msg: 'New design token available',          time: '1 hr ago' },
  ];
  const notifColor = (t: string) =>
    t === 'alert' ? MAGENTA : t === 'warn' ? '#e6a000' : CYAN;

  return (
    <Box component="header" sx={{
      height: 64, display: 'flex', alignItems: 'center',
      px: { xs: 1.5, sm: 2.5 }, gap: 1,
      bgcolor: '#ffffff',
      borderBottom: '1px solid #e4e8f5',
      flexShrink: 0, zIndex: 1200,
      boxShadow: '0 2px 16px rgba(0,180,216,0.07)',
      '&::after': {
        content: '""', position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent 0%, ${CYAN} 30%, ${MAGENTA} 70%, transparent 100%)`,
        opacity: 0.55,
      },
    }}>
      {/* Mobile toggle */}
      <IconButton size="small" onClick={onMenuToggle} sx={{
        display: { md: 'none' },
        color: CYAN, border: '1.5px solid rgba(0,180,216,0.25)', borderRadius: 1.5,
        '&:hover': { bgcolor: 'rgba(0,180,216,0.07)', borderColor: CYAN },
      }}>
        <MenuIcon fontSize="small" />
      </IconButton>

      {/* Page title */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box sx={{
          width: 3, height: 22, borderRadius: 2,
          background: `linear-gradient(180deg, ${CYAN}, ${MAGENTA})`,
          boxShadow: `0 0 8px rgba(0,180,216,0.5)`,
        }} />
        <Typography sx={{
          fontSize: { xs: '0.92rem', sm: '1.05rem' },
          fontWeight: 800, fontFamily: 'Orbitron, sans-serif',
          color: '#0d0d2b', letterSpacing: '0.04em',
        }}>
          {title}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {/* Theme picker */}
      <ThemePicker />

      {/* Notifications */}
      <Tooltip title="Notifications">
        <IconButton size="small" onClick={e => setNotifAnchor(e.currentTarget)} sx={{
          color: CYAN, position: 'relative',
          border: '1.5px solid rgba(0,180,216,0.2)', borderRadius: 1.5, p: 0.8,
          transition: 'all 0.2s',
          '&:hover': { borderColor: CYAN, bgcolor: 'rgba(0,180,216,0.07)', boxShadow: `0 0 10px rgba(0,180,216,0.2)` },
        }}>
          <NotificationsOutlinedIcon sx={{ fontSize: 18 }} />
          <Box sx={{
            position: 'absolute', top: 5, right: 5,
            width: 7, height: 7, borderRadius: '50%',
            bgcolor: MAGENTA, boxShadow: `0 0 5px ${MAGENTA}`,
          }} />
        </IconButton>
      </Tooltip>

      {/* Notif menu */}
      <Menu anchorEl={notifAnchor} open={Boolean(notifAnchor)} onClose={() => setNotifAnchor(null)}
        PaperProps={{ sx: {
          mt: 1, minWidth: 290, borderRadius: 2,
          bgcolor: '#fff', border: '1.5px solid #e4e8f5',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,180,216,0.06)',
        }}}>
        <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #f0f2fa' }}>
          <Typography sx={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', color: CYAN, letterSpacing: '0.12em' }}>
            NOTIFICATIONS
          </Typography>
        </Box>
        {notifications.map(n => (
          <MenuItem key={n.id} sx={{ py: 1.5, px: 2, borderBottom: '1px solid #f7f8fd', '&:hover': { bgcolor: 'rgba(0,180,216,0.04)' } }}>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: notifColor(n.type), boxShadow: `0 0 6px ${notifColor(n.type)}`, mt: 0.6, flexShrink: 0 }} />
              <Box>
                <Typography sx={{ fontSize: '0.78rem', color: '#1e2050', lineHeight: 1.4 }}>{n.msg}</Typography>
                <Typography sx={{ fontSize: '0.68rem', color: '#9ca3c8', mt: 0.25 }}>{n.time}</Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      {/* User avatar chip */}
      <Box onClick={e => setAnchorEl(e.currentTarget)} sx={{
        display: 'flex', alignItems: 'center', gap: 1,
        cursor: 'pointer', px: 1.25, py: 0.5, borderRadius: 2,
        border: '1.5px solid rgba(0,180,216,0.18)',
        transition: 'all 0.2s',
        '&:hover': { borderColor: CYAN, bgcolor: 'rgba(0,180,216,0.06)', boxShadow: `0 0 12px rgba(0,180,216,0.14)` },
      }}>
        <Avatar sx={{
          width: 30, height: 30, fontSize: '0.75rem', fontWeight: 800,
          background: `linear-gradient(135deg, ${CYAN}, ${MAGENTA})`,
          color: '#fff', fontFamily: 'Orbitron, sans-serif',
          boxShadow: `0 2px 10px rgba(0,180,216,0.35)`,
        }}>
          {initials}
        </Avatar>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#0d0d2b', lineHeight: 1.2 }}>
            {displayName}
          </Typography>
          <Typography sx={{ fontSize: '0.62rem', color: CYAN, lineHeight: 1 }}>Admin</Typography>
        </Box>
        <KeyboardArrowDownIcon sx={{ fontSize: 16, color: '#9ca3c8', display: { xs: 'none', sm: 'block' } }} />
      </Box>

      {/* User menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}
        PaperProps={{ sx: {
          mt: 1, minWidth: 210, borderRadius: 2,
          bgcolor: '#fff', border: '1.5px solid #e4e8f5',
          boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
        }}}>
        <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #f0f2fa' }}>
          <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, color: '#0d0d2b' }}>{displayName}</Typography>
          <Typography sx={{ fontSize: '0.68rem', color: CYAN }}>{email}</Typography>
        </Box>
        <MenuItem onClick={() => setAnchorEl(null)} sx={{ py: 1.25, px: 2, '&:hover': { bgcolor: 'rgba(0,180,216,0.05)' }, gap: 1.5 }}>
          <PersonOutlineIcon sx={{ fontSize: 17, color: CYAN }} />
          <Typography sx={{ fontSize: '0.82rem', color: '#2d3060' }}>Profile</Typography>
        </MenuItem>
        <Divider sx={{ borderColor: '#f0f2fa' }} />
        <MenuItem onClick={() => { setAnchorEl(null); onLogout(); }} sx={{ py: 1.25, px: 2, '&:hover': { bgcolor: 'rgba(212,0,200,0.05)' }, gap: 1.5 }}>
          <Logout sx={{ fontSize: 17, color: MAGENTA }} />
          <Typography sx={{ fontSize: '0.82rem', color: MAGENTA }}>Sign Out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

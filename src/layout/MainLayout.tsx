import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import SidebarMenu from './Sidebar';
import PageHeader  from './PageHeader';
import { useLogOutMutation } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { clearUser } from '../app/authSlice';

const DRAWER_FULL = 252;
const DRAWER_MINI = 68;

const ROUTE_TITLES: Record<string, string> = {
  '/':                  'Dashboard',
  '/dashboard':         'Dashboard',
  '/customised-loader': 'Custom Loader',
  '/unauthorized':      'Unauthorized',
};
const getTitle = (pathname: string) =>
  ROUTE_TITLES[pathname] ??
  (Object.keys(ROUTE_TITLES).find(r => pathname.startsWith(r) && r !== '/')
    ? ROUTE_TITLES[Object.keys(ROUTE_TITLES).find(r => pathname.startsWith(r) && r !== '/')!]
    : 'UI-Alchemy');

const CYAN    = '#00b4d8';
const MAGENTA = '#d400c8';

export default function MainLayout() {
  const theme    = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = React.useState(!isMobile);
  React.useEffect(() => { setOpen(!isMobile); }, [isMobile]);
  React.useEffect(() => { if (isMobile) setOpen(false); }, [location.pathname, isMobile]);

  const [logOut] = useLogOutMutation();
  const handleLogout = async () => {
    try { await logOut(); } finally {
      dispatch(clearUser());
      navigate('/login', { replace: true });
    }
  };

  const title       = getTitle(location.pathname);
  const drawerWidth = isMobile ? DRAWER_FULL : (open ? DRAWER_FULL : DRAWER_MINI);

  return (
    <>
      <Helmet><title>UI-Alchemy | {title}</title></Helmet>

      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#f2f4fb' }}>
        <CssBaseline />

        {/* Subtle background dot grid */}
        <Box sx={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,180,216,0.10) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.7,
        }} />

        {/* Sidebar Drawer — unchanged */}
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? open : true}
          onClose={() => isMobile && setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: drawerWidth, flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              overflowX: 'hidden',
              transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)',
              boxSizing: 'border-box',
              bgcolor: '#ffffff',
              border: 'none',
              borderRight: '1px solid #e4e8f5',
              boxShadow: '3px 0 20px rgba(0,180,216,0.08)',
              '&::after': {
                content: '""',
                position: 'absolute', top: 0, right: 0,
                width: '2px', height: '100%',
                background: `linear-gradient(180deg, transparent 0%, ${CYAN} 35%, ${MAGENTA} 70%, transparent 100%)`,
                opacity: 0.5,
              },
            },
          }}
        >
          <SidebarMenu
            collapsed={!open && !isMobile}
            setCollapsed={(st) => setOpen(!st)}
            onToggle={() => setOpen(v => !v)}
            isMobile={isMobile}
          />
        </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',       // ← remove height: '100vh' here, parent already sets it
            position: 'relative',
            zIndex: 1,
            minWidth: 0,
            transition: 'margin 0.25s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <PageHeader
            title={title}
            onLogout={handleLogout}
            onMenuToggle={() => setOpen(v => !v)}
            sidebarOpen={open}
          />
          <Box sx={{ flex: 1, overflow: 'auto', minHeight: 0 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
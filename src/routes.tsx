import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout        from './layout/MainLayout';
import LoginPage         from './pages/Login';
import Dashboard         from './pages/Dashboard';
import NotFound          from './pages/NotFound';
import UnauthorizedPage  from './pages/UnauthorizedPage';
import CustomisedLoader  from './pages/customisedStyles/CustomisedLoader';
// import { AuthRoute, AuthorizedRoute } from './ProtectedRoute';
import AdvancedSVG from './pages/svg/AdvancedSVG';
import SVGFilters from './pages/svg/SvgFilters';
import CustomisedSVG from './pages/customisedStyles/CustomisedSVG';
import SVGExercises from './pages/svg/SVGExercises';

// ─── Manual static routes (no dynamic menu generation) ───────────────────────
const router = createBrowserRouter(
  [
    // ── Public routes ────────────────────────────────────────────────────────
    { path: '/login', element: <LoginPage /> },

    // ── Protected routes (AuthRoute gate → MainLayout shell) ────────────────
    {
      path: '/',
      element: (
          <MainLayout />
      ),
      children: [
        // Index → Dashboard
        {
          index: true,
          element: (
              <Dashboard />
          ),
        },
        // /dashboard
        {
          path: 'dashboard',
          element: (
              <Dashboard />
          ),
        },
        // /customised-loader
        {
          path: 'customised-loader',
          element: (
              <CustomisedLoader />
            
          ),
        },
        {
          path: 'customised-svg',
          element: (
              <CustomisedSVG />
          ),
        },
        {
          path: 'svg-filters',
          element: (
            
              <SVGFilters />
            
          ),
        },
        {
          path: 'advanced-svg',
          element: (
            
              <AdvancedSVG />
            
          ),
        },
        {
          path: 'svg-exercises',
          element: (
            
              <SVGExercises />
            
          ),
        },
        // Catch-alls
        { path: 'unauthorized', element: <UnauthorizedPage /> },
        { path: '*',            element: <NotFound /> },
      ],
    },
  ],
  { basename: '/ui-alchemy' },
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

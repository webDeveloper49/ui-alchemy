import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout        from './layout/MainLayout';
import LoginPage         from './pages/Login';
import Dashboard         from './pages/Dashboard';
import NotFound          from './pages/NotFound';
import UnauthorizedPage  from './pages/UnauthorizedPage';
import CustomisedLoader  from './pages/customisedStyles/CustomisedLoader';
import { AuthRoute, AuthorizedRoute } from './ProtectedRoute';
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
        <AuthRoute>
          <MainLayout />
        </AuthRoute>
      ),
      children: [
        // Index → Dashboard
        {
          index: true,
          element: (
            <AuthorizedRoute>
              <Dashboard />
            </AuthorizedRoute>
          ),
        },
        // /dashboard
        {
          path: 'dashboard',
          element: (
            <AuthorizedRoute>
              <Dashboard />
            </AuthorizedRoute>
          ),
        },
        // /customised-loader
        {
          path: 'customised-loader',
          element: (
            <AuthorizedRoute>
              <CustomisedLoader />
            </AuthorizedRoute>
            
          ),
        },
        {
          path: 'customised-svg',
          element: (
            <AuthorizedRoute>
              <CustomisedSVG />
            </AuthorizedRoute>
          ),
        },
        {
          path: 'svg-filters',
          element: (
            <AuthorizedRoute>
              <SVGFilters />
            </AuthorizedRoute>
          ),
        },
        {
          path: 'advanced-svg',
          element: (
            <AuthorizedRoute>
              <AdvancedSVG />
            </AuthorizedRoute>
          ),
        },
        {
          path: 'svg-exercises',
          element: (
            <AuthorizedRoute>
              <SVGExercises />
            </AuthorizedRoute>
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

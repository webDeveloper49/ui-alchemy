import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout        from './layout/MainLayout';
import LoginPage         from './pages/Login';
import Dashboard         from './pages/Dashboard';
import NotFound          from './pages/NotFound';
import UnauthorizedPage  from './pages/UnauthorizedPage';
import CustomisedLoader  from './pages/customisedStyles/CustomisedLoader';
import { AuthRoute, AuthorizedRoute } from './ProtectedRoute';

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

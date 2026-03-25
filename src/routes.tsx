import React                        from 'react';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import MainLayout                   from './layout/MainLayout';
import type { ComponentType }       from 'react';
import { Box, Typography }          from '@mui/material';
import { MENUITEMS } from './constants/Menu.constants';
import { useMenuAccess } from './hooks/useMenuAccess';
import { ROLE_GUARD_ENABLED, TENANT_GUARD_ENABLED } from './utils/MenuAccess.utils';
import UnauthorizedPage from './pages/UnauthorizedPage';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import { AuthRoute, AuthorizedRoute } from './ProtectedRoute';
import type { MenuItem } from './models/Menu.models';
import LoginPage from './pages/Login';
import CustomisedLoader from './pages/customisedStyles/CustomisedLoader';


// ─── Fallback ─────────────────────────────────────────────────────────────────
const SamplePage = ({ heading }: { heading: string }) => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h5" sx={{ fontWeight: 700, color: 'var(--text-primary)' }}>
      {heading}
    </Typography>
  </Box>
);

// ─── Component registry ───────────────────────────────────────────────────────
const componentRegistry: Record<string, ComponentType<any>> = {
  CustomisedLoader, Dashboard
};

// ─── Layout registry ──────────────────────────────────────────────────────────
// When a MenuItem has BOTH a route/component AND children, the generator checks
// this map. If the component name is listed here, it emits a NESTED RouteObject:
//   • Layout component  → parent element (must render <Outlet />)
//   • Page component    → index child   (the cards overview / landing page)
//   • Menu children     → nested child routes
//
// To wrap another section in a layout in future, add exactly ONE line here.
const layoutRegistry: Record<string, ComponentType<any>> = {
//   PaathshalaReport: PaathshalaLayout,
};

// ─── Resolve element from registry (falls back to SamplePage) ─────────────────
const resolve = (name?: string, label = ''): React.ReactElement => {
  const Comp = name ? componentRegistry[name] : undefined;

  if (!Comp || typeof Comp !== 'function') {
    console.warn(`Invalid component for: ${name}`, Comp);
    return <SamplePage heading={label} />;
  }

  return <Comp />;
};

// ─── Core route generator ─────────────────────────────────────────────────────
//
// Three cases handled automatically:
//
//  1. item has route + component in layoutRegistry + children
//     → Nested route: Layout wraps <Outlet />, component = index, children = nested
//
//  2. item has route (no layout wrapping needed)
//     → Flat route. Menu children are still traversed as flat siblings.
//
//  3. item has no route (nav-only group like "Admin > General")
//     → Skip item itself, recurse into children.
//
export const generateRoutesFromMenu = (menuItems: MenuItem[]): RouteObject[] => {
  const routes: RouteObject[] = [];

  const traverse = (items: MenuItem[]) => {
    items.forEach(item => {
      if (item.route) {
        const Layout = item.component ? layoutRegistry[item.component] : undefined;

        if (Layout && item.children?.length) {
          // ── Case 1: nested layout route ─────────────────────────────
          const parentPath = item.route;
          routes.push({
            path:    parentPath.replace(/^\//, ''),
            element: <Layout />,
            children: [
              // index → the parent's own component (overview/cards page)
              {
                index:   true,
                element: resolve(item.component, item.label),
              },
              // children → relative paths, e.g. "attendance-db"
              ...item.children.map(child => ({
                path:    child.route?.replace(`${parentPath}/`, ''),
                element: resolve(child.component, child.label),
              })).filter(r => Boolean(r.path)),
            ],
          });
          // ⚠ Do NOT recurse children — they are already nested above.

        } else {
          // ── Case 2: flat route ───────────────────────────────────────
          routes.push({
            path:    item.route.replace(/^\//, ''),
            element: resolve(item.component, item.label),
          });
          // Continue traversing so nav-group children appear as flat siblings
          if (item.children) traverse(item.children);
        }

      } else if (item.children) {
        // ── Case 3: nav group with no own route ──────────────────────
        traverse(item.children);
      }
    });
  };

  traverse(menuItems);
  return routes;
};

// ─── Guard ─────────────────────────────────────────────────────────────────────
const GuardedRoute: React.FC<{
  path:    string;
  element: React.ReactElement;
  allowed: Set<string>;
}> = ({ path, element, allowed }) => {
  const guardActive = ROLE_GUARD_ENABLED || TENANT_GUARD_ENABLED;
  if (guardActive && !allowed.has('/' + path) && !allowed.has(path)) {
    return <UnauthorizedPage />;
  }
  return element;
};

// ─── Recursively wrap every RouteObject with auth + guards ────────────────────
// `parentPath` accumulates the absolute prefix so nested children (which have
// relative paths like "attendance-db") are always checked against their full
// absolute path (e.g. "/paathshala-report/attendance-db") in allowedRoutes.
const wrapWithGuards = (
  routes:     RouteObject[],
  allowed:    Set<string>,
  parentPath = '',           // ← absolute prefix, e.g. "paathshala-report"
): RouteObject[] =>
  routes.map((r): RouteObject => {
    const relativePath = (r as { path?: string }).path;

    // Build the full absolute path for this route so the guard can match it
    // against allowedRoutes regardless of nesting depth.
    const fullPath = relativePath
      ? (parentPath ? `${parentPath}/${relativePath}` : relativePath)
      : parentPath; // index route inherits parent's path for the allowed check

    const children = r.children
      ? wrapWithGuards(r.children, allowed, fullPath)
      : undefined;

    // ── Index route — no path of its own, parent layout already guarded ──────
    if ('index' in r && r.index) {
      return {
        index:   true,
        element: r.element as React.ReactElement,
        ...(children && { children }),
      } as RouteObject;
    }

    // ── Path route — guard against the FULL absolute path ────────────────────
    return {
      path:    relativePath,
      element: relativePath
        ? (
          <GuardedRoute
            path={fullPath}
            element={
              <AuthorizedRoute>
                {r.element as React.ReactElement}
              </AuthorizedRoute>
            }
            allowed={allowed}
          />
        )
        : (r.element as React.ReactElement),
      ...(children && { children }),
    } as RouteObject;
  });

// ─── Root router ──────────────────────────────────────────────────────────────
export function AppRouter() {
  const { allowedRoutes } = useMenuAccess();

  // Single call generates ALL routes — flat and nested — from the shared menu tree.
  const routes = wrapWithGuards(generateRoutesFromMenu(MENUITEMS), allowedRoutes);

  const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    {
      path:    '/',
      element: (
        <AuthRoute>
          <MainLayout />
        </AuthRoute>
      ),
      children: [
        { index: true,           element: <Dashboard /> },
        ...routes,
        { path: 'unauthorized',  element: <UnauthorizedPage /> },
        { path: '*',             element: <NotFound /> },
      ],
    },
  ],{
  basename: "/ui-alchemy"
});

  return <RouterProvider router={router} />;
}
// ProtectedRoute.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import type { RootState } from './app/store';
import { ROLE_GUARD_ENABLED, TENANT_GUARD_ENABLED } from './utils/MenuAccess.utils';
import { useMenuAccess } from './hooks/useMenuAccess';

// ── Layer 1: Authentication check ─────────────────────────────────────────────
export const AuthRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, initialising } = useSelector((s: RootState) => s.auth);

  // Wait for Firebase onAuthStateChanged to fire on boot
  if (initialising) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// ── Layer 2: Role + tenant authorization ─────────────────────────────────────
export const AuthorizedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { allowedRoutes } = useMenuAccess();
  const location = useLocation();

  // If both guards are off, skip check
  if (!ROLE_GUARD_ENABLED && !TENANT_GUARD_ENABLED) return <>{children}</>;

  if (!allowedRoutes.has(location.pathname)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
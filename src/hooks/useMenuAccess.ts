import { useMemo }     from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { collectAllowedRoutes, filterMenuItems, ROLE_GUARD_ENABLED, TENANT_GUARD_ENABLED } from '../utils/MenuAccess.utils';
import { MENUITEMS } from '../constants/Menu.constants';
import type { Role } from '../models/Menu.models';

export function useMenuAccess() {
  const { roles = [], tenantId = '' } = useSelector((s: RootState) => s.auth);

  const filteredMenu = useMemo(() => {
    // If both guards are off, skip filtering entirely — return original tree
    if (!ROLE_GUARD_ENABLED && !TENANT_GUARD_ENABLED) return MENUITEMS;
    return filterMenuItems(MENUITEMS, roles as Role[], tenantId, { roles: undefined, tenantIds: undefined });
  }, [roles, tenantId]);

  const allowedRoutes = useMemo(
    () => collectAllowedRoutes(filteredMenu),
    [filteredMenu],
  );

  return { filteredMenu, allowedRoutes };
}
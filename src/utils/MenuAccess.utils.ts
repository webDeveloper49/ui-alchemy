// utils/menuAccess.utils.ts
// ─────────────────────────────────────────────────────────────────────────────
// Pure, framework-agnostic helpers for role/tenant access control on menus.
//
// Feature flags (in .env):
//   VITE_ROLE_GUARD=true     → enable role-based filtering
//   VITE_TENANT_GUARD=true   → enable tenant-based filtering
//
// Inheritance rules:
//   • If a child's roles    is [] → it inherits the nearest ancestor's roles
//   • If a child's tenantIds is [] → it inherits the nearest ancestor's tenantIds
//   • If the parent is blocked, children are ALWAYS blocked regardless of their own config
//   • [] on a ROOT item (no parent) still means "open to all"
// ─────────────────────────────────────────────────────────────────────────────

import type { MenuItem, Role } from "../models/Menu.models";



// ── Feature flags ─────────────────────────────────────────────────────────────

export const ROLE_GUARD_ENABLED   = import.meta.env.VITE_ROLE_GUARD   === 'true';
export const TENANT_GUARD_ENABLED = import.meta.env.VITE_TENANT_GUARD === 'true';

// ── Internal context passed down the tree ─────────────────────────────────────

interface InheritedContext {
  roles:     Role[] | undefined;
  tenantIds: string[] | undefined;
}

// ── Resolve effective access lists for an item ────────────────────────────────

function resolveEffective(
  item: MenuItem,
  ctx:  InheritedContext,
): { roles: Role[] | undefined; tenantIds: string[] | undefined } {
  // Roles: use item's own if non-empty, else inherit from nearest ancestor
  const roles =
    item.roles && item.roles.length > 0
      ? item.roles
      : ctx.roles;               // undefined means "no restriction from ancestors"

  // TenantIds: same pattern
  const tenantIds =
    item.tenantIds && item.tenantIds.length > 0
      ? item.tenantIds
      : ctx.tenantIds;

  return { roles, tenantIds };
}

// ── Core accessibility check ──────────────────────────────────────────────────

/**
 * Returns true if the item passes access checks given effective (resolved) lists.
 * Pass the OUTPUT of resolveEffective(), not raw item fields.
 */
export function isAccessible(
  effectiveRoles:     Role[] | undefined,
  effectiveTenantIds: string[] | undefined,
  userRoles:  Role[],
  tenantId:   string,
): boolean {
  if (ROLE_GUARD_ENABLED && effectiveRoles !== undefined) {
    if (!effectiveRoles.some(r => userRoles.includes(r))) return false;
  }

  // Only apply tenant guard if:
  //  1. The flag is on
  //  2. The item actually restricts tenants (non-empty list)
  //  3. The user has a tenantId — if they don't, skip tenant check entirely
  if (
    TENANT_GUARD_ENABLED &&
    effectiveTenantIds !== undefined &&
    tenantId !== ''
  ) {
    if (!effectiveTenantIds.includes(tenantId)) return false;
  }

  return true;
}

// ── Recursive tree filter ─────────────────────────────────────────────────────

/**
 * Recursively filters a menu tree with parent-to-child inheritance.
 *
 * @param items     - nodes to filter
 * @param userRoles - roles from Redux auth
 * @param tenantId  - tenantId from Redux auth
 * @param ctx       - inherited context from the parent (start with empty {})
 */
export function filterMenuItems(
  items:     MenuItem[],
  userRoles: Role[],
  tenantId:  string,
  ctx:       InheritedContext = { roles: undefined, tenantIds: undefined },
): MenuItem[] {
  const result: MenuItem[] = [];

  for (const item of items) {
    // 1. Resolve what roles/tenantIds actually apply to this item
    const { roles: effectiveRoles, tenantIds: effectiveTenantIds } =
      resolveEffective(item, ctx);

    // 2. Check access — if blocked, skip entirely (children are also blocked)
    if (!isAccessible(effectiveRoles, effectiveTenantIds, userRoles, tenantId)) {
      continue;
    }

    // 3. Build the inherited context to pass to children.
    //    Use the effective values so grandchildren also benefit from inheritance.
    const childCtx: InheritedContext = {
      roles:     effectiveRoles,
      tenantIds: effectiveTenantIds,
    };

    // 4. Recurse into children if any
    if (item.children && item.children.length > 0) {
      const filteredChildren = filterMenuItems(
        item.children, userRoles, tenantId, childCtx,
      );
      // Drop parent if no children survived
      if (filteredChildren.length === 0) continue;
      result.push({ ...item, children: filteredChildren });
    } else {
      result.push(item);
    }
  }

  return result;
}

// ── Route path extractor ──────────────────────────────────────────────────────

/**
 * Collects every `route` string from an (already-filtered) menu tree.
 * Used by the router to know which paths are allowed.
 */
export function collectAllowedRoutes(items: MenuItem[]): Set<string> {
  const paths = new Set<string>();
  const traverse = (nodes: MenuItem[]) => {
    for (const node of nodes) {
      if (node.route) paths.add(node.route);
      if (node.children) traverse(node.children);
    }
  };
  traverse(items);
  return paths;
}
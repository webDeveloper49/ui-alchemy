// models/Menu.model.ts

export const ROLES = [
  'SuperAdmin',
  'Admin',
  'Finance',
  'Ops',
  'FTAdmin',
  'TrafficAnalyst',
  'Analyst',
] as const;

export type Role = typeof ROLES[number];

export interface MenuItem {
  label:      string;
  icon:       string;
  route?:     string;
  component?: string;
  open?: boolean; 
  show?: boolean; //if false dont display the menu in list

  /**
   * Role-based access.
   * - Empty array `[]`  → accessible to ALL roles (no restriction).
   * - Non-empty array   → only users whose role list intersects this array.
   * - Only evaluated when env VITE_ROLE_GUARD=true.
   */
  roles?: Role[];

  /**
   * Tenant-based access.
   * - Empty array `[]`  → accessible to ALL tenants (no restriction).
   * - Non-empty array   → only users whose tenantId is in this array.
   * - Only evaluated when env VITE_TENANT_GUARD=true.
   */
  tenantIds?: string[];

  children?: MenuItem[];
}
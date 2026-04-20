// constants/Menu.constants.ts
// ─────────────────────────────────────────────────────────────────────────────
// roles:     [] → all roles;  ['Admin'] → Admin only
// tenantIds: [] → all tenants; ['T1','T2'] → those tenants only
// ─────────────────────────────────────────────────────────────────────────────

import type { MenuItem } from "../models/Menu.models";



export const MENUITEMS: MenuItem[] = [
  {
    label: "Custom Components",
    icon: "user-shield",
    roles:     [],
    tenantIds: [],                          // all tenants
    children: [
      {
        label: "Loader",
        icon: "sliders",
        roles:     [],
        tenantIds: [],
        component: "CustomisedLoader",
        route: "/customised-loader"
      },
    ],
  },
  {
    label: "Dashboard",
    icon: "sliders",
    roles:     [],
    tenantIds: [],
    component: "Dashboard",
    route: '/dashboard'
  },
  

];
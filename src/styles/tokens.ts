// ═══════════════════════════════════════════════════════════════════════════════
//  DESIGN TOKENS  (Single Source of Truth)
//  ─────────────────────────────────────────────────────────────────────────────
//  Feeds: cssVars.ts → injected via MuiCssBaseline into :root
//         muiTheme.ts → MUI palette / component overrides
//         themeFactory.ts → AppTheme semantic object
//
//  ⚠  ONLY edit this file. Never hardcode colors anywhere else.
// ═══════════════════════════════════════════════════════════════════════════════

// ─── STATIC PALETTE COLORS (fixed hex values) ────────────────────────────────

export const palette = {
  navy: {
    50: '#E8EEF7', 100: '#C5D3E8', 200: '#9FB5D7', 300: '#7897C5',
    400: '#5980B7', 500: '#3A6AAA', 600: '#2A5298', 700: '#1F3E7A',
    800: '#1B2A4A', 900: '#111C31',
    DEFAULT: '#1B2A4A', light: '#7897C5', dark: '#111C31',
  },
  teal: {
    50: '#E0F7F5', 100: '#B2EBE6', 200: '#80DEDB', 300: '#4DD0CC',
    400: '#26C6BF', 500: '#26A69A', 600: '#00897B', 700: '#00796B',
    800: '#00695C', 900: '#004D40',
    DEFAULT: '#26A69A', light: '#4DB6AC', dark: '#00695C',
  },
  blue: {
    50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
    400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8',
    800: '#1E40AF', 900: '#1E3A8A',
    DEFAULT: '#2563EB', light: '#60A5FA', dark: '#1D4ED8',
  },
  green: {
    50: '#F0FDF4', 100: '#DCFCE7', 200: '#BBF7D0', 300: '#86EFAC',
    400: '#4ADE80', 500: '#22C55E', 600: '#16A34A', 700: '#15803D',
    800: '#166534', 900: '#14532D',
    DEFAULT: '#22C55E', light: '#4ADE80', dark: '#15803D',
  },
  amber: {
    50: '#FFFBEB', 100: '#FEF3C7', 200: '#FDE68A', 300: '#FCD34D',
    400: '#FBBF24', 500: '#F59E0B', 600: '#D97706', 700: '#B45309',
    800: '#92400E', 900: '#78350F',
    DEFAULT: '#F59E0B', light: '#FBBF24', dark: '#B45309',
  },
  red: {
    50: '#FFF1F2', 100: '#FFE4E6', 200: '#FECDD3', 300: '#FDA4AF',
    400: '#FB7185', 500: '#F43F5E', 600: '#E11D48', 700: '#BE123C',
    800: '#9F1239', 900: '#881337',
    DEFAULT: '#EF4444', light: '#FB7185', dark: '#DC2626',
  },
  orange: {
    50: '#FFF7ED', 100: '#FFEDD5', 200: '#FED7AA', 300: '#FDBA74',
    400: '#FB923C', 500: '#F97316', 600: '#EA580C', 700: '#C2410C',
    800: '#9A3412', 900: '#7C2D12',
    DEFAULT: '#F97316', light: '#FB923C', dark: '#C2410C',
  },
  purple: {
    50: '#FAF5FF', 100: '#F3E8FF', 200: '#E9D5FF', 300: '#D8B4FE',
    400: '#C084FC', 500: '#A855F7', 600: '#9333EA', 700: '#7E22CE',
    800: '#6B21A8', 900: '#581C87',
    DEFAULT: '#8B5CF6', light: '#C084FC', dark: '#7E22CE',
  },
  cyan: {
    50: '#ECFEFF', 100: '#CFFAFE', 200: '#A5F3FC', 300: '#67E8F9',
    400: '#22D3EE', 500: '#06B6D4', 600: '#0891B2', 700: '#0E7490',
    800: '#155E75', 900: '#164E63',
    DEFAULT: '#06B6D4', light: '#22D3EE', dark: '#0E7490',
  },
  gray: {
    50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB',
    400: '#9CA3AF', 500: '#6B7280', 600: '#4B5563', 700: '#374151',
    800: '#1F2937', 900: '#111827',
    DEFAULT: '#6B7280', light: '#9CA3AF', dark: '#374151',
  },
  slate: {
    50: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0', 300: '#CBD5E1',
    400: '#94A3B8', 500: '#64748B', 600: '#475569', 700: '#334155',
    800: '#1E293B', 900: '#0F172A',
    DEFAULT: '#64748B', light: '#94A3B8', dark: '#334155',
  },
} as const;

// ─── COMPONENT SIZING ─────────────────────────────────────────────────────────

export const sizing = {
  appbarHeight: '60px',
  sidebarWidth: '248px',
  sidebarCollapsed: '64px',
  btnHeightSm: '30px', btnHeightMd: '36px', btnHeightLg: '42px',
  btnPxSm: '12px', btnPxMd: '20px', btnPxLg: '28px',
  inputHeightSm: '30px', inputHeightMd: '38px',
  avatarSm: '28px', avatarMd: '34px', avatarLg: '42px',
  iconBtnSm: '28px', iconBtnMd: '34px',
  chipHeight: '22px', chipHeightSm: '18px',
  cardPadding: '20px', cardPaddingLg: '28px',
  tableCellPx: '16px', tableCellPy: '10px', tableHeaderPy: '10px',
  logoSize: '36px',
} as const;

// ─── TYPOGRAPHY ───────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: "'DM Sans', 'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  xs: '0.70rem', sm: '0.75rem', base: '0.82rem', md: '0.875rem',
  lg: '0.95rem', xl: '1.1rem', '2xl': '1.25rem', '3xl': '1.5rem', '4xl': '1.8rem',
  tight: '-0.03em', wide: '0.02em', wider: '0.06em', widest: '0.08em',
} as const;

// ─── SHADOWS ──────────────────────────────────────────────────────────────────

export const shadows = {
  none: 'none',
  xs:  '0 1px 2px rgba(15,23,42,0.06)',
  sm:  '0 1px 4px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.05)',
  DEFAULT: '0 4px 8px rgba(15,23,42,0.08), 0 2px 4px rgba(15,23,42,0.05)',
  md:  '0 4px 8px rgba(15,23,42,0.08), 0 2px 4px rgba(15,23,42,0.05)',
  lg:  '0 8px 20px rgba(15,23,42,0.10), 0 4px 8px rgba(15,23,42,0.06)',
  xl:  '0 16px 40px rgba(15,23,42,0.12), 0 8px 16px rgba(15,23,42,0.07)',
  '2xl': '0 24px 60px rgba(15,23,42,0.15)',
  card: '0 1px 4px rgba(15,23,42,0.07), 0 1px 2px rgba(15,23,42,0.04)',
  panel: '0 2px 12px rgba(15,23,42,0.08)',
  menu: '0 8px 28px rgba(15,23,42,0.14)',
  appbar: '0 1px 0 0 rgba(15,23,42,0.08)',
  'navy-sm': '0 2px 8px rgba(27,42,74,0.20)',
  'navy-md': '0 4px 16px rgba(27,42,74,0.28)',
  'teal-sm': '0 2px 8px rgba(38,166,154,0.25)',
  'teal-md': '0 4px 16px rgba(38,166,154,0.32)',
} as const;

// ─── BORDER RADIUS ────────────────────────────────────────────────────────────

export const radii = {
  none: '0px', xs: '2px', sm: '4px', DEFAULT: '4px',
  md: '6px', lg: '8px', xl: '12px', '2xl': '16px', '3xl': '24px', full: '9999px',
} as const;

// ─── TRANSITIONS ──────────────────────────────────────────────────────────────

export const transitions = {
  fast: '100ms ease', default: '150ms ease', medium: '200ms ease',
  slow: '300ms ease', sidebar: '225ms cubic-bezier(0.4,0,0.6,1)',
} as const;

// ─── STATUS TOKENS ────────────────────────────────────────────────────────────

export const status = {
  success: { color: '#15803D', bg: '#DCFCE7', border: '#BBF7D0' },
  warning: { color: '#B45309', bg: '#FEF3C7', border: '#FDE68A' },
  danger:  { color: '#DC2626', bg: '#FFF1F2', border: '#FECDD3' },
  info:    { color: '#0891B2', bg: '#E0F2FE', border: '#BAE6FD' },
  neutral: { color: '#475569', bg: '#F1F5F9', border: '#E2E8F0' },
  pending: { color: '#B45309', bg: '#FEF3C7', border: '#FDE68A' },
  exempt:  { color: '#1D4ED8', bg: '#DBEAFE', border: '#BFDBFE' },
} as const;

// ─── STATUS TOKENS (DARK MODE) ────────────────────────────────────────────────

export const statusDark = {
  success: { color: '#4ADE80', bg: 'rgba(74,222,128,0.12)', border: 'rgba(74,222,128,0.25)' },
  warning: { color: '#FCD34D', bg: 'rgba(252,211,77,0.12)',  border: 'rgba(252,211,77,0.25)'  },
  danger:  { color: '#FB7185', bg: 'rgba(251,113,133,0.12)', border: 'rgba(251,113,133,0.25)' },
  info:    { color: '#22D3EE', bg: 'rgba(34,211,238,0.12)',  border: 'rgba(34,211,238,0.25)'  },
  neutral: { color: '#94A3B8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.25)' },
  pending: { color: '#FCD34D', bg: 'rgba(252,211,77,0.12)',  border: 'rgba(252,211,77,0.25)'  },
  exempt:  { color: '#818CF8', bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.25)' },
} as const;

// ─── AVATAR COLORS ────────────────────────────────────────────────────────────

export const avatarColors = [
  '#1D4ED8', '#0891B2', '#7E22CE', '#00695C', '#B45309', '#DC2626',
] as const;

// ─── MUI SHADOWS ARRAY ────────────────────────────────────────────────────────

export const muiShadows: [
  'none', string, string, string, string, string, string, string, string,
  string, string, string, string, string, string, string, string, string,
  string, string, string, string, string, string, string
] = [
  'none',
  shadows.xs, shadows.sm, shadows.sm,
  shadows.DEFAULT, shadows.DEFAULT,
  shadows.lg, shadows.lg, shadows.xl, shadows.xl,
  shadows['2xl'], shadows['2xl'], shadows['2xl'], shadows['2xl'], shadows['2xl'],
  shadows['2xl'], shadows['2xl'], shadows['2xl'], shadows['2xl'], shadows['2xl'],
  shadows['2xl'], shadows['2xl'], shadows['2xl'], shadows['2xl'], shadows['2xl'],
];

// ─── TYPE EXPORTS ─────────────────────────────────────────────────────────────
export type Palette = typeof palette;
export type Shadows = typeof shadows;
export type Radii   = typeof radii;
export type Sizing  = typeof sizing;
export type Status  = typeof status;

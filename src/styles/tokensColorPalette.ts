// ─── 10 ACCENT COLOR PALETTES ────────────────────────────────────────────────
export type ColorShade =
  | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorTextShade =
  | '50Text' | '100Text' | '200Text' | '300Text' | '400Text'
  | '500Text' | '600Text' | '700Text' | '800Text' | '900Text';

export type ColorBorderShade =
  | '50Border' | '100Border' | '200Border' | '300Border' | '400Border'
  | '500Border' | '600Border' | '700Border' | '800Border' | '900Border';

export type ColorShadowShade =
  | '50Shadow' | '100Shadow' | '200Shadow' | '300Shadow' | '400Shadow'
  | '500Shadow' | '600Shadow' | '700Shadow' | '800Shadow' | '900Shadow';

export type ColorAvatarShade =
  | '50Avatar' | '100Avatar' | '200Avatar' | '300Avatar' | '400Avatar'
  | '500Avatar' | '600Avatar' | '700Avatar' | '800Avatar' | '900Avatar';

export type ColorScale = {
  [K in ColorShade]: string;
} & {
  [K in ColorTextShade]: string;
} & {
  [K in ColorBorderShade]: string;
} & {
  [K in ColorShadowShade]: string;
} & {
  [K in ColorAvatarShade]: string;
} & {
  label: string;
  hex: string;
  contrast: string;
};

export type ColorPalette = Record<string, ColorScale>;

// ─── Legend ──────────────────────────────────────────────────────────────────
//
//  Text   → readable foreground on that shade's background
//           50–400  : #000000  (light bg → dark text)
//           500–900 : #FFFFFF  (dark bg  → white text)
//           exceptions noted per hue (warm yellows/cyans stay dark longer)
//
//  Border → visible ring/outline around an element with that shade as bg
//           light shades (50–500)  : 2–3 steps darker in the same ramp
//           dark  shades (600–900) : 2–3 steps lighter so the ring pops
//
//  Shadow → drop-shadow tint color (always deeper/darker in the ramp)
//           light shades : moderate dark shade of the same hue
//           dark  shades : deepest shade (900) of the same hue
//
//  Avatar → avatar placeholder background colour shown against that shade
//           light context (50–400)  : one step darker than the shade
//           dark  context (500–900) : very light shade (50/100) for contrast
//
// ─────────────────────────────────────────────────────────────────────────────

export const colorPalette: ColorPalette = {

  // ── Indigo ──────────────────────────────────────────────────────────────────
  indigo: {
    50:  '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',

    // Text — 50-400 dark; 500-900 white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#FFFFFF',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border — light→darker shade; dark→lighter shade
    '50Border':  '#A5B4FC', // 300
    '100Border': '#A5B4FC', // 300
    '200Border': '#818CF8', // 400
    '300Border': '#6366F1', // 500
    '400Border': '#4F46E5', // 600
    '500Border': '#4338CA', // 700
    '600Border': '#818CF8', // 400 (lighter for dark bg)
    '700Border': '#818CF8', // 400
    '800Border': '#A5B4FC', // 300
    '900Border': '#A5B4FC', // 300

    // Shadow — progressively darker tint
    '50Shadow':  '#C7D2FE', // 200
    '100Shadow': '#A5B4FC', // 300
    '200Shadow': '#818CF8', // 400
    '300Shadow': '#6366F1', // 500
    '400Shadow': '#4F46E5', // 600
    '500Shadow': '#4338CA', // 700
    '600Shadow': '#3730A3', // 800
    '700Shadow': '#312E81', // 900
    '800Shadow': '#312E81', // 900
    '900Shadow': '#312E81', // 900

    // Avatar — light ctx: one step deeper; dark ctx: very light
    '50Avatar':  '#E0E7FF', // 100
    '100Avatar': '#C7D2FE', // 200
    '200Avatar': '#A5B4FC', // 300
    '300Avatar': '#818CF8', // 400
    '400Avatar': '#E0E7FF', // 100 (already medium, jump back to light)
    '500Avatar': '#EEF2FF', // 50
    '600Avatar': '#EEF2FF', // 50
    '700Avatar': '#E0E7FF', // 100
    '800Avatar': '#C7D2FE', // 200
    '900Avatar': '#A5B4FC', // 300

    label: 'Indigo',
    hex: '#4F46E5',
    contrast: '#FFFFFF',
  },

  // ── Violet ──────────────────────────────────────────────────────────────────
  violet: {
    50:  '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',

    // Text — 50-400 dark; 500-900 white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#FFFFFF',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#C4B5FD', // 300
    '100Border': '#C4B5FD', // 300
    '200Border': '#A78BFA', // 400
    '300Border': '#8B5CF6', // 500
    '400Border': '#7C3AED', // 600
    '500Border': '#6D28D9', // 700
    '600Border': '#A78BFA', // 400 (lighter for dark bg)
    '700Border': '#A78BFA', // 400
    '800Border': '#C4B5FD', // 300
    '900Border': '#C4B5FD', // 300

    // Shadow
    '50Shadow':  '#DDD6FE', // 200
    '100Shadow': '#C4B5FD', // 300
    '200Shadow': '#A78BFA', // 400
    '300Shadow': '#8B5CF6', // 500
    '400Shadow': '#7C3AED', // 600
    '500Shadow': '#6D28D9', // 700
    '600Shadow': '#5B21B6', // 800
    '700Shadow': '#4C1D95', // 900
    '800Shadow': '#4C1D95', // 900
    '900Shadow': '#4C1D95', // 900

    // Avatar
    '50Avatar':  '#EDE9FE', // 100
    '100Avatar': '#DDD6FE', // 200
    '200Avatar': '#C4B5FD', // 300
    '300Avatar': '#A78BFA', // 400
    '400Avatar': '#EDE9FE', // 100
    '500Avatar': '#F5F3FF', // 50
    '600Avatar': '#F5F3FF', // 50
    '700Avatar': '#EDE9FE', // 100
    '800Avatar': '#EDE9FE', // 100
    '900Avatar': '#DDD6FE', // 200

    label: 'Violet',
    hex: '#7C3AED',
    contrast: '#FFFFFF',
  },

  // ── Emerald ─────────────────────────────────────────────────────────────────
  emerald: {
    50:  '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',

    // Text — emerald 500 still readable with dark text; 600+ use white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#000000',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#6EE7B7', // 300
    '100Border': '#6EE7B7', // 300
    '200Border': '#34D399', // 400
    '300Border': '#10B981', // 500
    '400Border': '#059669', // 600
    '500Border': '#047857', // 700
    '600Border': '#34D399', // 400 (lighter for dark bg)
    '700Border': '#34D399', // 400
    '800Border': '#6EE7B7', // 300
    '900Border': '#6EE7B7', // 300

    // Shadow
    '50Shadow':  '#A7F3D0', // 200
    '100Shadow': '#6EE7B7', // 300
    '200Shadow': '#34D399', // 400
    '300Shadow': '#10B981', // 500
    '400Shadow': '#059669', // 600
    '500Shadow': '#047857', // 700
    '600Shadow': '#065F46', // 800
    '700Shadow': '#064E3B', // 900
    '800Shadow': '#064E3B', // 900
    '900Shadow': '#064E3B', // 900

    // Avatar
    '50Avatar':  '#D1FAE5', // 100
    '100Avatar': '#A7F3D0', // 200
    '200Avatar': '#6EE7B7', // 300
    '300Avatar': '#34D399', // 400
    '400Avatar': '#D1FAE5', // 100
    '500Avatar': '#ECFDF5', // 50
    '600Avatar': '#ECFDF5', // 50
    '700Avatar': '#D1FAE5', // 100
    '800Avatar': '#D1FAE5', // 100
    '900Avatar': '#A7F3D0', // 200

    label: 'Emerald',
    hex: '#059669',
    contrast: '#FFFFFF',
  },

  // ── Teal ────────────────────────────────────────────────────────────────────
  teal: {
    50:  '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',

    // Text — teal 500/600 readable with dark; 700+ white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#000000',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#5EEAD4', // 300
    '100Border': '#5EEAD4', // 300
    '200Border': '#2DD4BF', // 400
    '300Border': '#14B8A6', // 500
    '400Border': '#0D9488', // 600
    '500Border': '#0F766E', // 700
    '600Border': '#2DD4BF', // 400 (lighter for dark bg)
    '700Border': '#2DD4BF', // 400
    '800Border': '#5EEAD4', // 300
    '900Border': '#5EEAD4', // 300

    // Shadow
    '50Shadow':  '#99F6E4', // 200
    '100Shadow': '#5EEAD4', // 300
    '200Shadow': '#2DD4BF', // 400
    '300Shadow': '#14B8A6', // 500
    '400Shadow': '#0D9488', // 600
    '500Shadow': '#0F766E', // 700
    '600Shadow': '#115E59', // 800
    '700Shadow': '#134E4A', // 900
    '800Shadow': '#134E4A', // 900
    '900Shadow': '#134E4A', // 900

    // Avatar
    '50Avatar':  '#CCFBF1', // 100
    '100Avatar': '#99F6E4', // 200
    '200Avatar': '#5EEAD4', // 300
    '300Avatar': '#2DD4BF', // 400
    '400Avatar': '#CCFBF1', // 100
    '500Avatar': '#F0FDFA', // 50
    '600Avatar': '#F0FDFA', // 50
    '700Avatar': '#CCFBF1', // 100
    '800Avatar': '#CCFBF1', // 100
    '900Avatar': '#99F6E4', // 200

    label: 'Teal',
    hex: '#0D9488',
    contrast: '#FFFFFF',
  },

  // ── Cyan ────────────────────────────────────────────────────────────────────
  cyan: {
    50:  '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',

    // Text — cyan is bright; dark text through 500; 600+ white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#000000',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#67E8F9', // 300
    '100Border': '#67E8F9', // 300
    '200Border': '#22D3EE', // 400
    '300Border': '#06B6D4', // 500
    '400Border': '#0891B2', // 600
    '500Border': '#0E7490', // 700
    '600Border': '#22D3EE', // 400 (lighter for dark bg)
    '700Border': '#22D3EE', // 400
    '800Border': '#67E8F9', // 300
    '900Border': '#67E8F9', // 300

    // Shadow
    '50Shadow':  '#A5F3FC', // 200
    '100Shadow': '#67E8F9', // 300
    '200Shadow': '#22D3EE', // 400
    '300Shadow': '#06B6D4', // 500
    '400Shadow': '#0891B2', // 600
    '500Shadow': '#0E7490', // 700
    '600Shadow': '#155E75', // 800
    '700Shadow': '#164E63', // 900
    '800Shadow': '#164E63', // 900
    '900Shadow': '#164E63', // 900

    // Avatar
    '50Avatar':  '#CFFAFE', // 100
    '100Avatar': '#A5F3FC', // 200
    '200Avatar': '#67E8F9', // 300
    '300Avatar': '#22D3EE', // 400
    '400Avatar': '#CFFAFE', // 100
    '500Avatar': '#ECFEFF', // 50
    '600Avatar': '#ECFEFF', // 50
    '700Avatar': '#CFFAFE', // 100
    '800Avatar': '#CFFAFE', // 100
    '900Avatar': '#A5F3FC', // 200

    label: 'Cyan',
    hex: '#0891B2',
    contrast: '#FFFFFF',
  },

  // ── Amber ───────────────────────────────────────────────────────────────────
  amber: {
    50:  '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',

    // Text — amber is warm yellow; dark text through 600; 700+ white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#000000',
    '600Text': '#000000',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#FCD34D', // 300
    '100Border': '#FCD34D', // 300
    '200Border': '#FBBF24', // 400
    '300Border': '#F59E0B', // 500
    '400Border': '#D97706', // 600
    '500Border': '#B45309', // 700
    '600Border': '#FBBF24', // 400 (lighter for dark bg)
    '700Border': '#FBBF24', // 400
    '800Border': '#FCD34D', // 300
    '900Border': '#FCD34D', // 300

    // Shadow
    '50Shadow':  '#FDE68A', // 200
    '100Shadow': '#FCD34D', // 300
    '200Shadow': '#FBBF24', // 400
    '300Shadow': '#F59E0B', // 500
    '400Shadow': '#D97706', // 600
    '500Shadow': '#B45309', // 700
    '600Shadow': '#92400E', // 800
    '700Shadow': '#78350F', // 900
    '800Shadow': '#78350F', // 900
    '900Shadow': '#78350F', // 900

    // Avatar
    '50Avatar':  '#FEF3C7', // 100
    '100Avatar': '#FDE68A', // 200
    '200Avatar': '#FCD34D', // 300
    '300Avatar': '#FBBF24', // 400
    '400Avatar': '#FEF3C7', // 100
    '500Avatar': '#FFFBEB', // 50
    '600Avatar': '#FFFBEB', // 50
    '700Avatar': '#FEF3C7', // 100
    '800Avatar': '#FEF3C7', // 100
    '900Avatar': '#FDE68A', // 200

    label: 'Amber',
    hex: '#D97706',
    contrast: '#FFFFFF',
  },

  // ── Orange ──────────────────────────────────────────────────────────────────
  orange: {
    50:  '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',

    // Text — orange bright; dark text through 500; 600+ white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#000000',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#FDBA74', // 300
    '100Border': '#FDBA74', // 300
    '200Border': '#FB923C', // 400
    '300Border': '#F97316', // 500
    '400Border': '#EA580C', // 600
    '500Border': '#C2410C', // 700
    '600Border': '#FB923C', // 400 (lighter for dark bg)
    '700Border': '#FB923C', // 400
    '800Border': '#FDBA74', // 300
    '900Border': '#FDBA74', // 300

    // Shadow
    '50Shadow':  '#FED7AA', // 200
    '100Shadow': '#FDBA74', // 300
    '200Shadow': '#FB923C', // 400
    '300Shadow': '#F97316', // 500
    '400Shadow': '#EA580C', // 600
    '500Shadow': '#C2410C', // 700
    '600Shadow': '#9A3412', // 800
    '700Shadow': '#7C2D12', // 900
    '800Shadow': '#7C2D12', // 900
    '900Shadow': '#7C2D12', // 900

    // Avatar
    '50Avatar':  '#FFEDD5', // 100
    '100Avatar': '#FED7AA', // 200
    '200Avatar': '#FDBA74', // 300
    '300Avatar': '#FB923C', // 400
    '400Avatar': '#FFEDD5', // 100
    '500Avatar': '#FFF7ED', // 50
    '600Avatar': '#FFF7ED', // 50
    '700Avatar': '#FFEDD5', // 100
    '800Avatar': '#FFEDD5', // 100
    '900Avatar': '#FED7AA', // 200

    label: 'Orange',
    hex: '#EA580C',
    contrast: '#FFFFFF',
  },

  // ── Rose ────────────────────────────────────────────────────────────────────
  rose: {
    50:  '#FFF1F2',
    100: '#FFE4E6',
    200: '#FECDD3',
    300: '#FDA4AF',
    400: '#FB7185',
    500: '#F43F5E',
    600: '#E11D48',
    700: '#BE123C',
    800: '#9F1239',
    900: '#881337',

    // Text — rose 500 is vivid pink; white text from 500 onwards
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#FFFFFF',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#FDA4AF', // 300
    '100Border': '#FDA4AF', // 300
    '200Border': '#FB7185', // 400
    '300Border': '#F43F5E', // 500
    '400Border': '#E11D48', // 600
    '500Border': '#BE123C', // 700
    '600Border': '#FB7185', // 400 (lighter for dark bg)
    '700Border': '#FB7185', // 400
    '800Border': '#FDA4AF', // 300
    '900Border': '#FDA4AF', // 300

    // Shadow
    '50Shadow':  '#FECDD3', // 200
    '100Shadow': '#FDA4AF', // 300
    '200Shadow': '#FB7185', // 400
    '300Shadow': '#F43F5E', // 500
    '400Shadow': '#E11D48', // 600
    '500Shadow': '#BE123C', // 700
    '600Shadow': '#9F1239', // 800
    '700Shadow': '#881337', // 900
    '800Shadow': '#881337', // 900
    '900Shadow': '#881337', // 900

    // Avatar
    '50Avatar':  '#FFE4E6', // 100
    '100Avatar': '#FECDD3', // 200
    '200Avatar': '#FDA4AF', // 300
    '300Avatar': '#FB7185', // 400
    '400Avatar': '#FFE4E6', // 100
    '500Avatar': '#FFF1F2', // 50
    '600Avatar': '#FFF1F2', // 50
    '700Avatar': '#FFE4E6', // 100
    '800Avatar': '#FFE4E6', // 100
    '900Avatar': '#FECDD3', // 200

    label: 'Rose',
    hex: '#E11D48',
    contrast: '#FFFFFF',
  },

  // ── Slate ───────────────────────────────────────────────────────────────────
  slate: {
    50:  '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',

    // Text — neutral; dark text through 400; 500+ white
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#FFFFFF',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border
    '50Border':  '#CBD5E1', // 300
    '100Border': '#CBD5E1', // 300
    '200Border': '#94A3B8', // 400
    '300Border': '#64748B', // 500
    '400Border': '#475569', // 600
    '500Border': '#334155', // 700
    '600Border': '#94A3B8', // 400 (lighter for dark bg)
    '700Border': '#94A3B8', // 400
    '800Border': '#CBD5E1', // 300
    '900Border': '#CBD5E1', // 300

    // Shadow
    '50Shadow':  '#E2E8F0', // 200
    '100Shadow': '#CBD5E1', // 300
    '200Shadow': '#94A3B8', // 400
    '300Shadow': '#64748B', // 500
    '400Shadow': '#475569', // 600
    '500Shadow': '#334155', // 700
    '600Shadow': '#1E293B', // 800
    '700Shadow': '#0F172A', // 900
    '800Shadow': '#0F172A', // 900
    '900Shadow': '#0F172A', // 900

    // Avatar
    '50Avatar':  '#F1F5F9', // 100
    '100Avatar': '#E2E8F0', // 200
    '200Avatar': '#CBD5E1', // 300
    '300Avatar': '#94A3B8', // 400
    '400Avatar': '#F1F5F9', // 100
    '500Avatar': '#F8FAFC', // 50
    '600Avatar': '#F8FAFC', // 50
    '700Avatar': '#F1F5F9', // 100
    '800Avatar': '#F1F5F9', // 100
    '900Avatar': '#E2E8F0', // 200

    label: 'Slate',
    hex: '#475569',
    contrast: '#FFFFFF',
  },

  // ── Forest ──────────────────────────────────────────────────────────────────
  forest: {
    //  Ramp built around #1D6A25 as 500 (deep forest green, HSL ≈ 127°, 58%, 27%)
    //  50–400: progressively saturated lighter greens
    //  600–900: progressively darker/more muted
    50:  '#F2FAF3',
    100: '#DDEEDD',
    200: '#B4DAB8',
    300: '#80BE89',
    400: '#4D9E59',
    500: '#1D6A25',   // ← your anchor
    600: '#175E1F',
    700: '#114F19',
    800: '#0C3E13',
    900: '#082B0D',

    // Text — forest 500+ dark enough for white; 50–400 use black
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#FFFFFF',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border — light shades: 2–3 steps darker; dark shades: 2–3 steps lighter
    '50Border':  '#80BE89',   // 300
    '100Border': '#80BE89',   // 300
    '200Border': '#4D9E59',   // 400
    '300Border': '#1D6A25',   // 500
    '400Border': '#175E1F',   // 600
    '500Border': '#114F19',   // 700
    '600Border': '#4D9E59',   // 400 (lighter ring on dark bg)
    '700Border': '#4D9E59',   // 400
    '800Border': '#80BE89',   // 300
    '900Border': '#80BE89',   // 300

    // Shadow — progressively deeper tint of the same hue
    '50Shadow':  '#B4DAB8',   // 200
    '100Shadow': '#80BE89',   // 300
    '200Shadow': '#4D9E59',   // 400
    '300Shadow': '#1D6A25',   // 500
    '400Shadow': '#175E1F',   // 600
    '500Shadow': '#114F19',   // 700
    '600Shadow': '#0C3E13',   // 800
    '700Shadow': '#082B0D',   // 900
    '800Shadow': '#082B0D',   // 900
    '900Shadow': '#082B0D',   // 900

    // Avatar — light ctx: one step deeper; dark ctx: very light (50/100)
    '50Avatar':  '#DDEEDD',   // 100
    '100Avatar': '#B4DAB8',   // 200
    '200Avatar': '#80BE89',   // 300
    '300Avatar': '#4D9E59',   // 400
    '400Avatar': '#DDEEDD',   // 100 (medium shade, jump back to light)
    '500Avatar': '#F2FAF3',   // 50
    '600Avatar': '#F2FAF3',   // 50
    '700Avatar': '#DDEEDD',   // 100
    '800Avatar': '#DDEEDD',   // 100
    '900Avatar': '#B4DAB8',   // 200

    label: 'Forest',
    hex: '#1D6A25',
    contrast: '#FFFFFF',
  },

  // ── Navy ────────────────────────────────────────────────────────────────────
  navy: {
    //  Ramp built around #1D2A65 as 500 (deep navy blue, HSL ≈ 232°, 57%, 25%)
    //  50–400: progressively saturated lighter blues
    //  600–900: progressively darker/deeper navy
    50:  '#EEF0FF',
    100: '#E0E4FF',
    200: '#C2CCFE',
    300: '#95A3FB',
    400: '#5B6EF3',
    500: '#1D2A65',   // ← your anchor
    600: '#172257',
    700: '#111948',
    800: '#0C1138',
    900: '#070B26',

    // Text — navy 500 is dark enough for white; 50–400 use black
    '50Text':  '#000000',
    '100Text': '#000000',
    '200Text': '#000000',
    '300Text': '#000000',
    '400Text': '#000000',
    '500Text': '#FFFFFF',
    '600Text': '#FFFFFF',
    '700Text': '#FFFFFF',
    '800Text': '#FFFFFF',
    '900Text': '#FFFFFF',

    // Border — light shades: 2–3 steps darker; dark shades: 2–3 steps lighter
    '50Border':  '#95A3FB',   // 300
    '100Border': '#95A3FB',   // 300
    '200Border': '#5B6EF3',   // 400
    '300Border': '#1D2A65',   // 500
    '400Border': '#5B6EF3',   // 600
    '500Border': '#5B6EF3',   // 700
    '600Border': '#5B6EF3',   // 400 (lighter ring on dark bg)
    '700Border': '#5B6EF3',   // 400
    '800Border': '#95A3FB',   // 300
    '900Border': '#95A3FB',   // 300

    // Shadow — progressively deeper tint of the same hue
    '50Shadow':  '#C2CCFE',   // 200
    '100Shadow': '#95A3FB',   // 300
    '200Shadow': '#5B6EF3',   // 400
    '300Shadow': '#1D2A65',   // 500
    '400Shadow': '#172257',   // 600
    '500Shadow': '#111948',   // 700
    '600Shadow': '#0C1138',   // 800
    '700Shadow': '#070B26',   // 900
    '800Shadow': '#070B26',   // 900
    '900Shadow': '#070B26',   // 900

    // Avatar — light ctx: one step deeper; dark ctx: very light (50/100)
    '50Avatar':  '#E0E4FF',   // 100
    '100Avatar': '#C2CCFE',   // 200
    '200Avatar': '#95A3FB',   // 300
    '300Avatar': '#5B6EF3',   // 400
    '400Avatar': '#E0E4FF',   // 100 (medium shade, jump back to light)
    '500Avatar': '#EEF0FF',   // 50
    '600Avatar': '#EEF0FF',   // 50
    '700Avatar': '#E0E4FF',   // 100
    '800Avatar': '#E0E4FF',   // 100
    '900Avatar': '#C2CCFE',   // 200

    label: 'Navy',
    hex: '#1D2A65',
    contrast: '#FFFFFF',
  },

} as const;

export type AccentName = keyof typeof colorPalette;
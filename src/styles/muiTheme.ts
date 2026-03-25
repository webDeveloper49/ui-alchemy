// ─── muiTheme.ts ──────────────────────────────────────────────────────────────
// Creates a full MUI Theme from an AppTheme.
// Accepts AppTheme directly — call createAppTheme(mode, accent, secondary)
// before passing it here, so both primary and secondary are dynamic.

import { alpha, createTheme, type Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

import type {} from '@mui/x-date-pickers/themeAugmentation';
import { type AppTheme } from './themeFactory';
import { buildCssVars } from './cssVars';


declare module '@mui/material/styles' {
  interface Theme {
    /** Full AppTheme — access semantic tokens via theme.app.colors.* */
    app: AppTheme;
  }
  interface ThemeOptions {
    app?: AppTheme;
  }

  // ── Extend primary/secondary to carry the full ColorState ─────────────────
  // This means theme.palette.primary[300], theme.palette.primary.hover,
  // theme.palette.secondary['500Text'], etc. are all fully typed.

  interface Palette {
    accent: {
      main: string; light: string; lighter: string;
      dark: string; darker: string;
      contrastText: string; border: string; shadow: string;
    };
    secondaryAccent: {
      main: string; light: string; lighter: string;
      dark: string; darker: string;
      contrastText: string; border: string; shadow: string;
    };
    button: ColorStateExtension & {
      main: string; light: string; dark: string; contrastText: string;
      hex: string; label: string; contrast?: string;
    };
    secondaryButton: ColorStateExtension & {
      main: string; light: string; dark: string; contrastText: string;
      hex: string; label: string; contrast?: string;
    };
    border: {
      default: string;
      strong: string;
    }
  }
  interface PaletteOptions {
    accent?:          Partial<Palette['accent']>;
    secondaryAccent?: Partial<Palette['secondaryAccent']>;
    button?:          Partial<Palette['button']>;
    secondaryButton?: Partial<Palette['secondaryButton']>;
    border?:          Partial<Palette['border']>;
  }

  interface TypographyVariants      { label: React.CSSProperties; code: React.CSSProperties; }
  interface TypographyVariantsOptions { label?: React.CSSProperties; code?: React.CSSProperties; }

  interface Mixins {
    /** Expanded sidebar width in px */
    drawerWidth:   number;
    /** Collapsed (mini) sidebar width in px */
    drawerMini:    number;
    /** AppBar / top-bar height in px */
    appBarHeight:  number;
  }
  interface MixinsOptions {
    drawerWidth?:  number;
    drawerMini?:   number;
    appBarHeight?: number;
  }
}

// ─── ColorStateExtension ──────────────────────────────────────────────────────
// All ColorState fields that go beyond MUI's built-in PaletteColor shape.
// Imported as a plain interface so it can be used in both augmentations above.

interface ColorStateExtension {
  // Numeric shades
  50: string; 100: string; 200: string; 300: string; 400: string;
  500: string; 600: string; 700: string; 800: string; 900: string;
  // Text shades
  '50Text': string;  '100Text': string; '200Text': string; '300Text': string; '400Text': string;
  '500Text': string; '600Text': string; '700Text': string; '800Text': string; '900Text': string;
  // Border shades
  '50Border': string;  '100Border': string; '200Border': string; '300Border': string; '400Border': string;
  '500Border': string; '600Border': string; '700Border': string; '800Border': string; '900Border': string;
  // Shadow shades
  '50Shadow': string;  '100Shadow': string; '200Shadow': string; '300Shadow': string; '400Shadow': string;
  '500Shadow': string; '600Shadow': string; '700Shadow': string; '800Shadow': string; '900Shadow': string;
  // Avatar shades
  '50Avatar': string;  '100Avatar': string; '200Avatar': string; '300Avatar': string; '400Avatar': string;
  '500Avatar': string; '600Avatar': string; '700Avatar': string; '800Avatar': string; '900Avatar': string;
  // Semantic surface tokens
  hover:    string;
  selected: string;
  active:   string;
  disabled: string;
  logo:     string;
  // Semantic text tokens
  text:         string;
  hoverText:    string;
  selectedText: string;
  activeText:   string;
  disabledText: string;
  logoText:     string;
  textInverse:  string;
  // Decorative tokens
  border: string;
  shadow: string;
  glass:  string;
  // Palette metadata
  hex:      string;
  label:    string;
  contrast?: string;
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides { accent: true; secondaryAccent: true; }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides { accent: true; secondaryAccent: true; }
}
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides { accent: true; secondaryAccent: true; }
}
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides { accent: true; secondaryAccent: true; }
}

// ─── Main factory ─────────────────────────────────────────────────────────────

export function createMuiTheme(appTheme: AppTheme): Theme {
  const { colors: c, isDark, accentScale } = appTheme;

  // If the accent is very dark, treat the accent as "dark" for components that need to adjust text/icon contrast
  // const isDarkLooking = DarkLookingAccentColors.includes(appTheme.accent) && isDark;

  const p       = c.primary;
  const s       = c.secondary;
  const cssVars = buildCssVars(appTheme);
  const customShape =  {
    borderRadiusPrimary: '8px',
    borderRadiusButton: '6px',
    borderRadiusInput: '6px',
    icon: '50%',
  };

  // ─── Component overrides ─────────────────────────────────────────────────
  const components: Components<Theme> = {
    // ── CSS baseline + CSS vars injection ─────────────────────────────────
    MuiCssBaseline: {
      styleOverrides: () => ({
        ':root': cssVars,
        '*, *::before, *::after': { boxSizing: 'border-box' },
        body: {
          // fontFamily:          typography.fontFamily,
          backgroundColor:     c.background.page,
          color:               c.text.primary,
          // fontSize:            typography.base,
          lineHeight:          1.6,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transition:          'background-color 200ms ease, color 200ms ease',
        },
        '::selection': {
          backgroundColor: accentScale[200],
          color:           accentScale[900],
        },
        '::-webkit-scrollbar':             { width: 4, height: 4 },
        '::-webkit-scrollbar-track':       { background: isDark ? '#1E293B' : p[50] },
        '::-webkit-scrollbar-thumb':       { background: isDark ? (isDark ? alpha('#ffffff',0.5): p[700]) : p[300], borderRadius: 9999 },
        '::-webkit-scrollbar-thumb:hover': { background: isDark ? p[600] : p[400] },
        '@media print': {
          body:        { background: '#fff !important' },
          '.no-print': { display:    'none !important' },
        },
      }),
    },

  };
  const typography = {
    fontFamily: '"Inter", "Roboto", sans-serif',
    base: 13,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    wide: '0.02em',
    tight: '-0.01em',
  };

  // ─── Assemble final MUI theme ──────────────────────────────────────────────
  return createTheme({
    app: appTheme,

    palette: {
      mode: appTheme.mode,

      // Spread the full ColorState — every shade, text, border, shadow, avatar,
      // and semantic token is now accessible as theme.palette.primary.*
      // e.g. theme.palette.primary[300], theme.palette.primary.hover,
      //      theme.palette.primary['400Text'], theme.palette.primary.glass
      primary: {
        ...p,
        // MUI's required aliases
        main:         p.main,
        light:        p[400],
        dark:         p[700],
        contrastText: p.text,
      },

      secondary: {
        ...s,
        main:         s.main,
        light:        s[400],
        dark:         s[700],
        contrastText: s.text,
      },

      // ── button: full primary ColorState, namespaced for buttons ──────────
      // theme.palette.button[300], theme.palette.button.hover,
      // theme.palette.button['500Text'], theme.palette.button.glass, etc.
      button: {
        ...p,
        main:         p.main,
        light:        p[400],
        dark:         p[700],
        contrastText: p.text,
      },

      // ── secondaryButton: full secondary ColorState for secondary buttons ─
      // theme.palette.secondaryButton[300], theme.palette.secondaryButton.hover,
      // theme.palette.secondaryButton['400Border'], etc.
      secondaryButton: {
        ...s,
        main:         s.main,
        light:        s[400],
        dark:         s[700],
        contrastText: s.text,
      },

      // Extended accent groups
      accent: {
        main:         p.main,
        light:        p[400],
        lighter:      p[200],
        dark:         p[700],
        darker:       p[900],
        contrastText: p.text,
        border:       p.border,
        shadow:       p[600],
      },

      secondaryAccent: {
        main:         s.main,
        light:        s[400],
        lighter:      s[200],
        dark:         s[700],
        darker:       s[900],
        contrastText: s.text,
        border:       s.border,
        shadow:       s[600],
      },

      background: {
        default: c.background.page,
        paper:   c.background.card,
      },

      border: {
        default: c.border.default,
        strong:  c.border.strong,
      },

      text: {
        primary:   c.text.primary,
        secondary: c.text.secondary,
        disabled:  c.text.disabled,
      },

      divider: c.border.default,

      error:   { main: isDark ? '#FB7185' : '#E11D48', light: '#FDA4AF', dark: '#9F1239' },
      success: { main: isDark ? '#4ADE80' : '#16A34A', light: '#6EE7B7', dark: '#065F46' },
      warning: { main: isDark ? '#FCD34D' : '#D97706', light: '#FDE68A', dark: '#92400E' },
      info:    { main: isDark ? '#22D3EE' : '#0891B2', light: p[300],    dark: p[700]    },

      action: {
        hover:              alpha(p.main, 0.08),
        selected:           alpha(p.main, 0.14),
        disabledBackground: isDark ? p[900] : p[100],
        disabled:           c.text.disabled,
        focus:              alpha(p.main, 0.20),
      },
    },

    typography: {
      sidebar: {
        root: {
          fontSize: typography.lg,
          fontWeight: 500,
          letterSpacing: typography.wide,
          lineHeight: 1.4,
        },
        nested: {
          fontSize: typography.md,
          fontWeight: 450,
          letterSpacing: typography.tight,
          lineHeight: 1.35,
        },
        active: {
          fontWeight: 600,
        },
      },

      fontFamily: typography.fontFamily,
      fontSize:   13,
      h1: { fontWeight: 800, letterSpacing: '-0.02em' },
      h2: { fontWeight: 700, letterSpacing: '-0.015em' },
      h3: { fontWeight: 700, letterSpacing: '-0.01em' },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      subtitle1: { fontWeight: 500 },
      subtitle2: { fontWeight: 500 },
      button:    { fontWeight: 600, textTransform: 'none', letterSpacing: '0.02em' },
      overline:  { fontWeight: 700, letterSpacing: '0.10em' },
      label:     { fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' },
      code:      { fontFamily: '"Fira Code", "JetBrains Mono", monospace', fontSize: '0.85em' },
    },
    mixins: {
      drawerWidth:  280,
      drawerMini:    64,
      appBarHeight:  60,
    },

    // shadows: muiShadows,

    shape: { 
      borderRadius: 3,
    },
    customShape,

    transitions: {
      duration: {
        shortest: 150, shorter: 200, short: 250,
        standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195,
      },
    },

    components,
  });
}
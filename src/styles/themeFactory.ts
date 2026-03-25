// ─── themeFactory.ts ──────────────────────────────────────────────────────────
// Generates a fully-typed semantic AppTheme from a mode + accent name.

import {
  type AccentName,
  type ColorAvatarShade,
  type ColorBorderShade,
  colorPalette,
  type ColorScale,
  type ColorShade,
  type ColorShadowShade,
  type ColorTextShade,
} from './tokensColorPalette';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ThemeMode = 'light' | 'dark';

/**
 * ColorState: the full palette scale spread flat, plus semantic tokens that
 * describe interaction states (hover, selected, active, disabled…).
 */
export type ColorState = {
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
  contrast?: string;
} & {
  main: string;
  hover: string;
  selected: string;
  active: string;
  disabled: string;
  logo: string;

  text: string;
  hoverText: string;
  selectedText: string;
  activeText: string;
  disabledText: string;
  logoText: string;
  textInverse: string;

  border: string;
  shadow: string;
  glass: string;
};

export interface ThemeButtonType {
  bg:           string;
  text:         string;
  hover:        string;
  hoverText:    string;
  selected:     string;
  selectedText: string;
  active:       string;
  activeText:   string;
  disabled:     string;
  disabledText: string;
  border:       string;
  shadow:       string;
  glass:        string;
}

export interface AppTheme {
  mode: ThemeMode;
  accent: AccentName;
  secondaryAccent: AccentName;
  isDark: boolean;
  accentScale: ColorScale;
  secondaryScale: ColorScale;
  colors: {
    primary: ColorState;
    secondary: ColorState;
    button: ThemeButtonType ;
    secondaryButton: ThemeButtonType ;
    background: {
      page:  string;
      card:  string;
      glass: string;
      muted: string;
    };
    text: {
      primary:   string;
      secondary: string;
      disabled:  string;
      onAccent:  string;
    };
    border: {
      default: string;
      strong:  string;
    };
  };
}

// ─── Factory ──────────────────────────────────────────────────────────────────

export function createAppTheme(
  mode: ThemeMode,
  accent: AccentName,
  secondaryAccent: AccentName = 'emerald',
): AppTheme {
  const p    = colorPalette[accent];
  const s    = colorPalette[secondaryAccent];
  const dark = mode === 'dark';

  const pageBg  = dark ? '#0F172A'              : p[50];
  const cardBg  = dark ? '#1E293B'              : '#FFFFFF';
  const glassBg = dark ? 'rgba(15,23,42,0.80)' : 'rgba(255,255,255,0.88)';
  const mutedBg = dark ? '#0F172A'              : p[100];

  const textPrimary   = dark ? '#F1F5F9' : '#0F172A';
  const textSecondary = dark ? '#94A3B8' : '#475569';
  const textDisabled  = dark ? '#334155' : '#CBD5E1';
  const textOnAccent  = p['500Text'];

  const borderDefault =  dark ? p['500Border'] : p['100Border'];
  const borderStrong  = dark ? p[700]      : p['300Border'];

  const createColorState = (scale: ColorScale): ColorState => {
    const baseRgb = hexToRgb(scale[600]);
    const softRgb = hexToRgb(scale[400]);

    const main     = scale[500];
    const hover    = dark ? scale[700] : scale[200];
    const selected = dark ? scale[800] : scale[700];
    const active   = dark ? scale[900] : scale[800];
    const disabled = dark ? scale[800] : scale[200];

    const text         = scale['500Text'];
    const hoverText    = dark ? scale['700Text'] : scale['200Text'];
    const selectedText = dark ? scale['800Text'] : scale['700Text'];
    const activeText   = dark ? scale['900Text'] : scale['800Text'];
    const disabledText = dark ? scale['800Text'] : scale['200Text'];

    const border =  scale['400Border'];

    const shadow = dark
      ? `0 4px 24px rgba(${baseRgb}, 0.40)`
      : `0 4px 24px rgba(${baseRgb}, 0.20)`;

    const glass = dark
      ? `linear-gradient(135deg, rgba(${baseRgb}, 0.22) 0%, rgba(${softRgb}, 0.10) 100%)`
      : `linear-gradient(135deg, rgba(255,255,255,0.70) 0%, rgba(${softRgb}, 0.10) 100%)`;

    return {
      ...scale,
      main, hover, selected, active, disabled,
      logo: scale[500],
      text, hoverText, selectedText, activeText, disabledText,
      logoText:    '#FFFFFF',
      textInverse: dark ? '#FFFFFF' : (scale.contrast ?? '#000000'),
      border, shadow, glass,
    } as ColorState;
  };

  const primary   = createColorState(p);
  const secondary = createColorState(s);

  return {
    mode,
    accent,
    secondaryAccent: secondaryAccent,
    isDark: dark,
    accentScale: p,
    secondaryScale: s,
    colors: {
      primary,
      secondary,
      background: { page: pageBg, card: cardBg, glass: glassBg, muted: mutedBg },
      text: { primary: textPrimary, secondary: textSecondary, disabled: textDisabled, onAccent: textOnAccent },
      border: { default: borderDefault, strong: borderStrong },
      button: {
        bg:           primary.main,
        text:         primary.text,
        hover:        dark ? primary[700] : primary[600],
        hoverText:    primary.text,
        selected:     primary.selected,
        selectedText: primary.selectedText,
        active:       primary.active,
        activeText:   primary.activeText,
        disabled:     primary.disabled,
        disabledText: primary.disabledText,
        border:       primary.border,
        shadow:       primary.shadow,
        glass:        primary.glass,
      },
      secondaryButton: {
        bg:           secondary.main,
        text:         secondary.text,
        hover:        dark ? secondary[700] : secondary[600],
        hoverText:    secondary.text,
        selected:     secondary.selected,
        selectedText: secondary.selectedText,
        active:       secondary.active,
        activeText:   secondary.activeText,
        disabled:     secondary.disabled,
        disabledText: secondary.disabledText,
        border:       secondary.border,
        shadow:       secondary.shadow,
        glass:        secondary.glass,
      },
    },
  };
}

/** Converts `#RRGGBB` → `"r,g,b"` for rgba() strings. */
export function hexToRgb(hex: string): string {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);
  return `${r},${g},${b}`;
}
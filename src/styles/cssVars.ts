
import type { AppTheme } from './themeFactory';
import { sizing, typography, shadows, radii, transitions } from './tokens';

type CssVarMap = Record<string, string>;

export function buildCssVars(t: AppTheme): CssVarMap {
  const { colors: c, isDark } = t;

  // ─────────────────────────────────────────────
  // SURFACES
  // ─────────────────────────────────────────────
  const surfaces: CssVarMap = {
    '--surface-page':   c.background.page,
    '--surface-card':   c.background.card,
    '--surface-muted':  c.background.muted,
    '--surface-glass':  c.background.glass,
    '--surface-overlay': isDark
      ? 'rgba(0,0,0,0.6)'
      : 'rgba(15,23,42,0.5)',
  };

  // ─────────────────────────────────────────────
  // PRIMARY (FULL STATE)
  // ─────────────────────────────────────────────
  const primaryVars: CssVarMap = {
    '--color-primary':                c.primary.main,
    '--color-primary-hover':          c.primary.hover,
    '--color-primary-selected':       c.primary.selected,
    '--color-primary-active':         c.primary.active,
    '--color-primary-disabled':       c.primary.disabled,
    '--color-primary-logo':           c.primary.logo,
    '--color-primary-glass':          c.primary.glass,

    '--color-primary-text':           c.primary.text,
    '--color-primary-hover-text':     c.primary.hoverText,
    '--color-primary-selected-text':  c.primary.selectedText,
    '--color-primary-active-text':    c.primary.activeText,
    '--color-primary-disabled-text':  c.primary.disabledText,
    '--color-primary-logo-text':      c.primary.logoText,
    '--color-primary-text-inverse':   c.primary.textInverse,

    '--color-primary-border':         c.primary.border,
    '--color-primary-shadow':         c.primary.shadow,
  };

  // ─────────────────────────────────────────────
  // SECONDARY (FULL STATE)
  // ─────────────────────────────────────────────
  const secondaryVars: CssVarMap = {
    '--color-secondary':                c.secondary.main,
    '--color-secondary-hover':          c.secondary.hover,
    '--color-secondary-selected':       c.secondary.selected,
    '--color-secondary-active':         c.secondary.active,
    '--color-secondary-disabled':       c.secondary.disabled,
    '--color-secondary-logo':           c.secondary.logo,
    '--color-secondary-glass':          c.secondary.glass,

    '--color-secondary-text':           c.secondary.text,
    '--color-secondary-hover-text':     c.secondary.hoverText,
    '--color-secondary-selected-text':  c.secondary.selectedText,
    '--color-secondary-active-text':    c.secondary.activeText,
    '--color-secondary-disabled-text':  c.secondary.disabledText,
    '--color-secondary-logo-text':      c.secondary.logoText,
    '--color-secondary-text-inverse':   c.secondary.textInverse,

    '--color-secondary-border':         c.secondary.border,
    '--color-secondary-shadow':         c.secondary.shadow,
  };

  // ─────────────────────────────────────────────
  // BUTTON (FULL STATE)
  // ─────────────────────────────────────────────
  const buttonVars: CssVarMap = {
    '--color-button-bg':              c.button.bg,
    '--color-button-text':            c.button.text,

    '--color-button-hover':           c.button.hover,
    '--color-button-hover-text':      c.button.hoverText,

    '--color-button-selected':        c.button.selected,
    '--color-button-selected-text':   c.button.selectedText,

    '--color-button-active':          c.button.active,
    '--color-button-active-text':     c.button.activeText,

    '--color-button-disabled':        c.button.disabled,
    '--color-button-disabled-text':   c.button.disabledText,

    '--color-button-border':          c.button.border,
    '--color-button-shadow':          c.button.shadow,
  };

  // ─────────────────────────────────────────────
  // SHADOWS
  // ─────────────────────────────────────────────
  const shadowVars: CssVarMap = {
    '--shadow-xs': shadows.xs,
    '--shadow-sm': shadows.sm,
    '--shadow-md': shadows.md,
    '--shadow-lg': shadows.lg,
    '--shadow-xl': shadows.xl,
    '--shadow-2xl': shadows['2xl'],
  };

  // ─────────────────────────────────────────────
  // RADII
  // ─────────────────────────────────────────────
  const radiiVars: CssVarMap = {
    '--radius-none': radii.none,
    '--radius-sm': radii.sm,
    '--radius-md': radii.md,
    '--radius-lg': radii.lg,
    '--radius-xl': radii.xl,
    '--radius-full': radii.full,
  };

  // ─────────────────────────────────────────────
  // TRANSITIONS
  // ─────────────────────────────────────────────
  const transitionVars: CssVarMap = {
    '--transition-fast': transitions.fast,
    '--transition-default': transitions.default,
    '--transition-medium': transitions.medium,
    '--transition-slow': transitions.slow,
  };

  // ─────────────────────────────────────────────
  // TYPOGRAPHY
  // ─────────────────────────────────────────────
  const typographyVars: CssVarMap = {
    '--font-family': typography.fontFamily,
    '--font-xs': typography.xs,
    '--font-sm': typography.sm,
    '--font-base': typography.base,
    '--font-md': typography.md,
    '--font-lg': typography.lg,
    '--font-xl': typography.xl,
  };

  // ─────────────────────────────────────────────
  // SIZING
  // ─────────────────────────────────────────────
  const sizingVars: CssVarMap = {
    '--sizing-appbar-height': sizing.appbarHeight,
    '--sizing-sidebar-width': sizing.sidebarWidth,
    '--sizing-sidebar-collapsed': sizing.sidebarCollapsed,
  };

  return {
    ...surfaces,
    ...primaryVars,
    ...secondaryVars,
    ...buttonVars,
    ...shadowVars,
    ...radiiVars,
    ...transitionVars,
    ...typographyVars,
    ...sizingVars,
  };
}
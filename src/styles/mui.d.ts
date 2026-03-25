import '@mui/material/styles';
declare module '@mui/material/styles' {
  interface PaletteColor {
    main:string;
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
  }

  interface SimplePaletteColorOptions {
    main?: string;
    hover?: string;
    selected?: string;
    active?: string;
    disabled?: string;
    logo?: string;

    text?: string;
    hoverText?: string;
    selectedText?: string;
    activeText?: string;
    disabledText?: string;
    logoText?: string;

    textInverse?: string;
    border?: string;
    shadow?: string;
    glass?: string;
  }
 
  interface ButtonVariants {
    bg: string;
    text: string;

    hover: string;
    hoverText: string;

    selected: string;
    selectedText: string;

    active: string;
    activeText: string;

    disabled: string;
    disabledText: string;

    border: string;
    shadow: string;
    glass: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    button: ButtonVariants;
  }

  interface PaletteOptions {
    primary?: Partial<SimplePaletteColorOptions>;
    secondary?: Partial<SimplePaletteColorOptions>;
    button?: Partial<ButtonVariants>;
  }

  interface TypographyVariants {
    sidebar: {
      root: CSSProperties;
      nested: CSSProperties;
      active: CSSProperties;
    };
  }

  interface TypographyVariantsOptions {
    sidebar?: {
      root?: CSSProperties;
      nested?: CSSProperties;
      active?: CSSProperties;
    };
  }

  interface Theme {
    sidebar: {
      width: number;
      miniWidth: number;
    };
    customShape: {
      borderRadiusPrimary: string | number;
      borderRadiusSecondary: string | number;
      borderRadiusButton: string | number;
      borderRadiusInput: string | number;
      borderRadiusLg: string | number;
      borderRadiusSm: string | number;
      pill: string | number;
      icon: string | number;
    };
  }

  interface ThemeOptions {
    sidebar?: {
      width?: number;
      miniWidth?: number;
    };
    customShape?: {
      borderRadiusPrimary?: string | number;
      borderRadiusSecondary?: string | number;
      borderRadiusButton?: string | number;
      borderRadiusInput?: string | number;
      borderRadiusLg?: string | number;
      borderRadiusSm?: string | number;
      pill?: string | number;
      icon?: string | number;
    };
  }
}
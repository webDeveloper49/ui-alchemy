// features/theme/themeSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThemeMode } from '../styles/themeFactory';
import { colorPalette, type AccentName } from '../styles/tokensColorPalette';

interface ThemeState {
  mode: ThemeMode;
  accent: AccentName;
}

const THEME_MODE_KEY = 'app_theme_mode';
const THEME_ACCENT_KEY = 'app_theme_accent';

/**
 * Safe read helper
 */
function getInitialMode(): ThemeMode {
  const stored = localStorage.getItem(THEME_MODE_KEY);
  return stored === 'dark' ? 'dark' : 'light';
}

function getInitialAccent(): AccentName {
  const stored = localStorage.getItem(THEME_ACCENT_KEY);
  // fallback to blue if invalid
  const allowed: AccentName[] = Object.keys(colorPalette) as AccentName[];

  return allowed.includes(stored as AccentName)
    ? (stored as AccentName)
    : 'navy';
}

const initialState: ThemeState = {
  mode: getInitialMode(),
  accent: getInitialAccent(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      localStorage.setItem(THEME_MODE_KEY, action.payload);
    },
    setAccent(state, action: PayloadAction<AccentName>) {
      state.accent = action.payload;
      localStorage.setItem(THEME_ACCENT_KEY, action.payload);
    },
  },
});

export const { setMode, setAccent } = themeSlice.actions;
export default themeSlice.reducer;
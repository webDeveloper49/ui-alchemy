import { useSelector } from 'react-redux'
import { type RootState } from './app/store.ts'
import { ThemeProvider } from '@mui/material'

import CssBaseline from "@mui/material/CssBaseline"
import { HelmetProvider } from 'react-helmet-async'
import { AppRouter } from './routes.tsx'
import { createAppTheme } from './styles/themeFactory.ts'
import { createMuiTheme } from './styles/muiTheme.ts'

export default function AppThemeProvider() {
  const { mode, accent } = useSelector((state: RootState) => state.theme);
  const appTheme = createAppTheme(mode, accent);
  const muiTheme = createMuiTheme(appTheme);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </ThemeProvider>
  );
}
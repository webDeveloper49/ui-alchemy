import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import AppThemeProvider from './App.tsx'
import { initAuth } from './app/authSlice.ts'

store.dispatch(initAuth());

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppThemeProvider/>
      </LocalizationProvider>
    </Provider>,
)



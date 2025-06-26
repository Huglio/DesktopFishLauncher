import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes.tsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { SessionProvider } from './contexts/SessionContext/index.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <GlobalStyle />
          <AppRoutes />
          <ToastContainer />
        </SessionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

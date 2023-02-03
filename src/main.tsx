import './reset.css';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';

import { worker } from './mocks/worker';
import { createTheme, ThemeProvider } from '@mui/material';

if (import.meta.env.DEV) {
  worker.start();
}

const queryClient = new QueryClient();
const theme = createTheme({
  typography: {
    fontFamily: "'Jua', sans-serif",
  },
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </RecoilRoot>
  </ThemeProvider>,
  // </React.StrictMode>
);

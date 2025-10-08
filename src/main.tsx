import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Dispatch render event for pre-rendering
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Give React time to fully render
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 1000);
  });
}

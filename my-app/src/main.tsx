import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // <-- ESTA LINHA É OBRIGATÓRIA PARA O TAILWIND FUNCIONAR
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
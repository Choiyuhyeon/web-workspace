import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css' 초기 설정 떄문에 필요가 없다.
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

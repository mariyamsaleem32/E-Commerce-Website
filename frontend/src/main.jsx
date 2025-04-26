import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './components/shopcontext/index.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <ShopContextProvider>
      <App />
  </ShopContextProvider>
   </BrowserRouter>
  </StrictMode>
)

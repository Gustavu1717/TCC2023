import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/cadastro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagamento from './pages/pagamento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/pagamento' element={<Pagamento />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

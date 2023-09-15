import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagamento from './pages/pagamento';
import Nendereco from './pages/Endereço';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/endereco' element={<Nendereco />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

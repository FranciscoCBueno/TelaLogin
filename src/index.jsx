import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Rotas } from './router/RouterConfig'

const root = ReactDOM.createRoot(document.getElementById('root'));
//Renderiza o componente RouterProvider, passando a configuração de rotas
root.render(
  <React.StrictMode>
    <RouterProvider router={Rotas}/>
  </React.StrictMode>
);

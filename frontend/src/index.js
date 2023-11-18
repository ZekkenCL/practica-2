import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap aquí
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/styles.css'; // Importar estilos personalizados aquí


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

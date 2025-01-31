import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  );
}
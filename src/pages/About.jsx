import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import debounce from '@popperjs/core/dist/esm/utils/debounce';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
export default function About(){
    return (
        <div>
            <h1>Acerca debounce       </h1>
            <p>Estafcyasjgduhalig</p> 
        </div>
    );
}
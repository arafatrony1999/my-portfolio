import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PortfolioProvider } from './context/PortfolioContext';
import { CategoryProvider } from './context/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CategoryProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </CategoryProvider>
  </React.StrictMode>
);

reportWebVitals();

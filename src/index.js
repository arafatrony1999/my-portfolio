import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PortfolioProvider } from './context/PortfolioContext';
import { CategoryProvider } from './context/CategoryContext';
import { SkillProvider } from './context/SkillContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CategoryProvider>
      <PortfolioProvider>
        <SkillProvider>
          <App />
        </SkillProvider>
      </PortfolioProvider>
    </CategoryProvider>
  </React.StrictMode>
);

reportWebVitals();

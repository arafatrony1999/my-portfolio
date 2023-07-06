import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PortfolioProvider } from './context/PortfolioContext';
import { CategoryProvider } from './context/CategoryContext';
import { SkillProvider } from './context/SkillContext';
import { BlogProvider } from './context/BlogContext';
import { TestimonialProvider } from './context/TestimonialContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CategoryProvider>
      <PortfolioProvider>
        <SkillProvider>
          <BlogProvider>
            <TestimonialProvider>
              <App />
            </TestimonialProvider>
          </BlogProvider>
        </SkillProvider>
      </PortfolioProvider>
    </CategoryProvider>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PortfolioProvider } from './context/PortfolioContext';
import { CategoryProvider } from './context/CategoryContext';
import { SkillProvider } from './context/SkillContext';
import { BlogProvider } from './context/BlogContext';
import { TestimonialProvider } from './context/TestimonialContext';
import { ContactProvider } from './context/ContactContext';
import { PricingProvider } from './context/PricingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PortfolioProvider>
      <CategoryProvider>
        <SkillProvider>
          <BlogProvider>
            <TestimonialProvider>
              <ContactProvider>
                <PricingProvider>
                  <App />
                </PricingProvider>
              </ContactProvider>
            </TestimonialProvider>
          </BlogProvider>
        </SkillProvider>
      </CategoryProvider>
    </PortfolioProvider>
  </React.StrictMode>
);

reportWebVitals();

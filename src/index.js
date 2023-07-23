import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';





i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: 'en',
    debug: true,
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>

    
       <App />
      </I18nextProvider>
    </BrowserRouter>
   
    
  </React.StrictMode>
);


reportWebVitals();

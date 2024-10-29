import { createContext } from 'react';
import rosetta from 'rosetta';
import enTest from '../public/blog/i18n/en/test.json';
import esTest from '../public/blog/i18n/es/test.json';

const dict = rosetta({
  en: {
    test: enTest
  },
  es: {
    test: esTest
  }
});

export const defaultLanguage = 'en';
export const languages = ['en', 'es'];

export const I18nContext = createContext();

dict.locale(defaultLanguage);

const I18nProvider = ({ children }) => (
  <I18nContext.Provider value={dict}>
    {children}
  </I18nContext.Provider>
);

export default I18nProvider;

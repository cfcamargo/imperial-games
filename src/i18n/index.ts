import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'


import es from './translations/esPY.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  interpolation: {
    escapeValue : false,
  },
  resources: {
    es : es
  }
})


export default i18n;
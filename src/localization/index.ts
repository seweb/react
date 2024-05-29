import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getItem } from '@/utils';
import en from './translations/en';
import ua from './translations/ua';

const resources = {
  ua,
  en,
};

const currentLanguage = getItem('lang');

i18n.use(initReactI18next).init({
  resources,
  lng: currentLanguage || 'en',
  supportedLngs: ['ua', 'en'],
  interpolation: {
    escapeValue: false,
  },
});

export default resources;

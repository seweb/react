export * from './router';
import i18n from 'i18next';
import authResources from './localization';

i18n.addResourceBundle('ua', 'auth', authResources.ua.auth);
i18n.addResourceBundle('en', 'auth', authResources.en.auth);

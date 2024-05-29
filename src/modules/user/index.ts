export * from './router';
import i18n from 'i18next';
import userResources from './localization';

i18n.addResourceBundle('ua', 'user', userResources.ua.user);
i18n.addResourceBundle('en', 'user', userResources.en.user);

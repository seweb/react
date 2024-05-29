export * from './router';
import i18n from 'i18next';
import articlesResources from './localization';

i18n.addResourceBundle('ua', 'articles', articlesResources.ua.articles);
i18n.addResourceBundle('en', 'articles', articlesResources.en.articles);

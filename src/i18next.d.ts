import generalResources from '@/localization';
import userResources from '@/modules/user/localization';

type Resources = typeof generalResources.ua & typeof userResources.ua;

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    resources: Resources;
  }
}

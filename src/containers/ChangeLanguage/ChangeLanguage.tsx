import { useTranslation } from 'react-i18next';
import { setItem } from '@/utils';
import styles from './ChangeLanguage.module.scss';

export function ChangeLanguage() {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const handleClick = () => {
    const isEnglish = language === 'en';
    const currentLanguage = isEnglish ? 'ua' : 'en';
    changeLanguage(currentLanguage);
    setItem('lang', currentLanguage);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.buttonLng}
    >
      {language === 'en' ? 'En' : 'Ua'}
    </button>
  );
}

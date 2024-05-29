import { Loader } from '@/components';
import styles from './Button.module.scss';

type ButtonProps = {
  type?: 'submit' | 'button';
  text: string;
  className?: string;
  isLoading?: boolean | undefined;
  onClick?: () => void;
};
export function Button(props: ButtonProps) {
  const { type, text, className, onClick, isLoading = false } = props;
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={`${className} ${isLoading ? 'is-loading' : ''}`}
      disabled={isLoading}
      onClick={onClick}
    >
      <span className="button-text">{text}</span>
      <span className={styles.loaderWrapper}>{isLoading && <Loader />}</span>
    </button>
  );
}

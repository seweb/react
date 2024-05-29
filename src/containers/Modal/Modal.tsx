// import { useTranslation } from 'react-i18next';
import { resetState, useModalStore } from '@/store/modal.store';
import { Button } from '@/components';
import styles from './Modal.module.scss';

export function Modal() {
  // const { t } = useTranslation();
  const {
    title,
    text,
    onClose,
    onConfirm,
    open = false,
    confirmBtnText,
    cancelBtnText,
    variant,
    children,
    maxWidth,
  } = useModalStore();

  const handleConfirm = () => {
    resetState();
    if (onConfirm) onConfirm();
  };

  const handleClose = () => {
    resetState();
    if (onClose) onClose();
  };

  if (!open) return null;

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.overlay}
        onClick={handleClose}
      >
        'common:close'
      </button>
      {variant !== 'custom' ? (
        <div className={styles.content}>
          <div
            className={styles.body}
            style={{ maxWidth }}
          >
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
            <div className={styles.buttons}>
              <Button
                type="button"
                text={confirmBtnText || 'ok'}
                onClick={handleConfirm}
              />
              {variant === 'confirm' && (
                <Button
                  type="button"
                  text={cancelBtnText || 'cancel'}
                  onClick={handleClose}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        children || null
      )}
    </div>
  );
}

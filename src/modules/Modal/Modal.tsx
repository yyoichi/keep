import React, { ReactNode, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.css';
import clsx from 'clsx';

interface Props {
  className?: string;
  isOpen: boolean;
  outSideClick: () => void;
  children: ReactNode;
}

const rootEle = document.querySelector('#root');

const Modal = ({ className, isOpen, outSideClick, children }: Props) => {
  const onOutSideClick = useCallback(() => {
    outSideClick();
  }, [outSideClick]);

  const Modal = useMemo(
    () =>
      createPortal(
        <>
          <div className={styles.outside} onClick={onOutSideClick} />
          <div className={clsx(styles.modal, className)}>{children}</div>
        </>,
        rootEle
      ),
    [className, children, onOutSideClick]
  );

  return isOpen ? Modal : null;
};

export default Modal;

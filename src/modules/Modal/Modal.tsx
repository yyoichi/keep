import React, { ReactNode, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.css';
import clsx from 'clsx';

interface Props {
  className?: string;
  isOpen: boolean;
  outSideClick?: () => void;
  children: ReactNode;
}

const Modal = ({ className, isOpen, outSideClick, children }: Props) => {
  const rootEl = useMemo(() => document.querySelector('#root'), []);

  const onOutSideClick = useCallback(() => {
    outSideClick();
  }, [outSideClick]);

  const cns = useMemo(() => clsx(styles.root, className), [className]);

  const Modal = useMemo(
    () =>
      createPortal(
        <>
          <div className={styles.outside} onClick={onOutSideClick} />
          <div className={cns}>{children}</div>
        </>,
        rootEl
      ),
    [cns, children, onOutSideClick, rootEl]
  );

  return isOpen ? Modal : null;
};

export default Modal;

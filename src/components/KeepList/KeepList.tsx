import React, { ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import styles from './KeepList.css';

interface Props {
  className?: string;
  label?: string;
  children: ReactNode;
}

const KeepList = ({ className, label, children }: Props) => {
  const isExistChilren = useMemo(() => React.Children.toArray(children).filter(Boolean).length, [children]);

  return isExistChilren ? (
    <div className={clsx(styles.root, className)}>
      <p className={styles.label}>{label}</p>
      <div className={styles.list}>{children}</div>
    </div>
  ) : null;
};

export default KeepList;

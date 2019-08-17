import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './KeepList.css';

interface Props {
  className?: string;
  children: ReactNode;
}

const KeepList = ({ className, children }: Props) => {
  return <div className={clsx(styles.root, className)}>{children}</div>;
};

export default KeepList;

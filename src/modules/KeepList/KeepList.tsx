import React, { ReactNode } from 'react';
import styles from './KeepList.css';

interface Props {
  children: ReactNode;
}

const KeepList = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};

export default KeepList;

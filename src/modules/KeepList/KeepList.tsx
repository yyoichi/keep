import React, { ReactNode } from 'react';
import styles from './KeepList.css';

interface Props {
  children: ReactNode;
}

const KeepList = (props: Props) => {
  return <div className={styles.root}>{props.children}</div>;
};

export default KeepList;

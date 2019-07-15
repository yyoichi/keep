import React, { useMemo, useCallback } from 'react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import styles from './Preview.css';

interface Props {
  value: string;
  onClick: () => void;
}

const Preview = (props: Props) => {
  const cns = useMemo(() => clsx(styles.Preview), []);

  const onClick = useCallback(() => {
    props.onClick();
  }, []);

  return (
    <div className={cns} onClick={onClick}>
      <ReactMarkdown source={props.value} plugins={[breaks]} />
    </div>
  );
};

export default Preview;

import React, { useMemo, useCallback } from 'react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import styles from './Preview.css';

interface Props {
  className?: string;
  value: string;
  onClick?: () => void;
}

const Preview = ({ className, value, onClick }: Props) => {
  const rootClass = useMemo(() => clsx(styles.root, className), [className]);

  const onPreviewClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <div className={rootClass} onClick={onPreviewClick}>
      <ReactMarkdown source={value} plugins={[breaks]} />
    </div>
  );
};

export default Preview;

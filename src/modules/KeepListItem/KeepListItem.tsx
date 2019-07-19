import React, { useCallback } from 'react';
import Preview from '../Preview/Preview';
import styles from './KeepListItem.css';
import { Keep } from '../../domain/keep';

interface Props {
  keep: Keep;
  onDelete: (id: number) => void;
}

const KeepListItem = (props: Props) => {
  const onPreviewClick = useCallback(() => {}, []);

  const onDeleteClick = useCallback(() => {
    props.onDelete(props.keep.id);
  }, [props]);

  return (
    <div className={styles.root}>
      <Preview className={styles.KeepListItem} value={props.keep.value} onClick={onPreviewClick} />
      <div className={styles.tools}>
        <button className={styles.delete} onClick={onDeleteClick}>
          ×
        </button>
      </div>
    </div>
  );
};

export default KeepListItem;

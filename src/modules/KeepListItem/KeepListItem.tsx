import React, { useCallback } from 'react';
import Preview from '../Preview/Preview';
import styles from './KeepListItem.css';
import { Keep } from '../../store/keeps/keeps';

interface Props {
  keep: Keep;
  onDelete: (id: string) => void;
}

const KeepListItem = ({ keep, onDelete }: Props) => {
  const onPreviewClick = useCallback(() => {}, []);

  const onDeleteClick = useCallback(() => {
    onDelete(keep.id);
  }, [keep, onDelete]);

  return (
    <div className={styles.root}>
      <Preview
        className={styles.KeepListItem}
        value={keep.value}
        onClick={onPreviewClick}
      />
      <div className={styles.tools}>
        <button className={styles.delete} onClick={onDeleteClick}>
          ×
        </button>
      </div>
    </div>
  );
};

export default KeepListItem;

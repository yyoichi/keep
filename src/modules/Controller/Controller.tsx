import React, { useCallback } from 'react';
import styles from './Controller.css';

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

const Controller = ({ onEdit, onDelete }: Props) => {
  const onEditClick = useCallback(() => {
    onEdit();
  }, [onEdit]);

  const onDeleteClick = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <div className={styles.root}>
      <button className={styles.edit} onClick={onEditClick}>
        Edit
      </button>
      <button className={styles.delete} onClick={onDeleteClick}>
        ×
      </button>
    </div>
  );
};

export default Controller;

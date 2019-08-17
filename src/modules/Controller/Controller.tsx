import React, { useCallback } from 'react';
import clsx from 'clsx';
import styles from './Controller.css';

interface Props {
  className?: string;
  isEditing: boolean;
  onEdit: () => void;
  onPreview: () => void;
  onDelete: () => void;
}

const Controller = ({ className, isEditing, onEdit, onPreview, onDelete }: Props) => {
  const onEditClick = useCallback(() => {
    onEdit();
  }, [onEdit]);

  const onPreviewClick = useCallback(() => {
    onPreview();
  }, [onPreview]);

  const onDeleteClick = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <div className={clsx(styles.root, className)}>
      {isEditing ? (
        <button className={styles.previewButton} onClick={onPreviewClick}>
          Preview
        </button>
      ) : (
        <button className={styles.edit} onClick={onEditClick}>
          Edit
        </button>
      )}
      <button className={styles.delete} onClick={onDeleteClick}>
        ×
      </button>
    </div>
  );
};

export default Controller;

import React, { useCallback } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../IconButton/IconButton';
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
        <IconButton className={clsx(styles.button, styles.previewButton)} onClick={onPreviewClick} title="Preview">
          <FontAwesomeIcon icon={faEye} />
        </IconButton>
      ) : (
        <IconButton className={clsx(styles.button, styles.editButton)} onClick={onEditClick} title="Edit">
          <FontAwesomeIcon icon={faEdit} />
        </IconButton>
      )}
      <IconButton className={clsx(styles.button, styles.deleteButton)} onClick={onDeleteClick} title="Delete">
        <FontAwesomeIcon icon={faTrash} />
      </IconButton>
    </div>
  );
};

export default Controller;

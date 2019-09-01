import React, { useCallback } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faThumbtack, faTrash, faSlash } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../IconButton/IconButton';
import styles from './Controller.css';

interface Props {
  className?: string;
  isEditing: boolean;
  isPined: boolean;
  onEdit: () => void;
  onPreview: () => void;
  onPin: () => void;
  onUnPin: () => void;
  onDelete: () => void;
}

const Controller = ({ className, isEditing, isPined, onEdit, onPreview, onPin, onUnPin, onDelete }: Props) => {
  const onEditClick = useCallback(() => {
    onEdit();
  }, [onEdit]);

  const onPreviewClick = useCallback(() => {
    onPreview();
  }, [onPreview]);

  const onPinClick = useCallback(() => {
    onPin();
  }, [onPin]);

  const onUnPinClick = useCallback(() => {
    onUnPin();
  }, [onUnPin]);

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
      {isPined ? (
        <IconButton className={clsx(styles.button, styles.pinButton)} onClick={onUnPinClick} title="UnPin">
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faThumbtack} />
            <FontAwesomeIcon icon={faSlash} />
          </span>
        </IconButton>
      ) : (
        <IconButton className={clsx(styles.button, styles.pinButton)} onClick={onPinClick} title="Pin">
          <FontAwesomeIcon icon={faThumbtack} />
        </IconButton>
      )}
      <IconButton className={clsx(styles.button, styles.deleteButton)} onClick={onDeleteClick} title="Delete">
        <FontAwesomeIcon icon={faTrash} />
      </IconButton>
    </div>
  );
};

export default Controller;

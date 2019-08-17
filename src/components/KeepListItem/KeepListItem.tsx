import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Keep } from '../../store/keeps';
import Preview from '../../modules/Preview/Preview';
import Controller from '../../modules/Controller/Controller';
import styles from './KeepListItem.css';

interface Props {
  className?: string;
  keep: Keep;
  onDelete: (id: string) => void;
  onOpen: (id: string) => void;
  onEditClick: (id: string) => void;
  onPreviewClick: (id: string) => void;
}

const KeepListItem = ({ className, keep, onDelete, onOpen, onEditClick, onPreviewClick }: Props) => {
  const onDeleteClick = useCallback(() => {
    onDelete(keep.id);
  }, [keep, onDelete]);

  const onItemOpen = useCallback(() => {
    onOpen(keep.id);
  }, [keep, onOpen]);

  const onControllerEditClick = useCallback(() => {
    onEditClick(keep.id);
  }, [keep, onEditClick]);

  const onControllerPreviewClick = useCallback(() => {
    onPreviewClick(keep.id);
  }, [keep, onPreviewClick]);

  return (
    <div className={clsx(styles.root, className, { [styles.open]: keep.isOpen })} onClick={onItemOpen}>
      <Preview value={keep.value} onClick={onItemOpen} />
      <Controller
        className={styles.controller}
        isEditing={keep.isEditing}
        onEdit={onControllerEditClick}
        onPreview={onControllerPreviewClick}
        onDelete={onDeleteClick}
      />
    </div>
  );
};

export default KeepListItem;

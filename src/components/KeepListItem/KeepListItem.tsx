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
  onPinClick: (id: string) => void;
  onUnPinClick: (id: string) => void;
}

const KeepListItem = ({
  className,
  keep,
  onDelete,
  onOpen,
  onEditClick,
  onPreviewClick,
  onPinClick,
  onUnPinClick
}: Props) => {
  const onDeleteClick = useCallback(() => {
    onDelete(keep.id);
  }, [keep, onDelete]);

  const onItemClick = useCallback(() => {
    onOpen(keep.id);
  }, [keep, onOpen]);

  const onControllerEditClick = useCallback(() => {
    onEditClick(keep.id);
    onOpen(keep.id);
  }, [keep, onEditClick, onOpen]);

  const onControllerPreviewClick = useCallback(() => {
    onPreviewClick(keep.id);
  }, [keep, onPreviewClick]);

  const onControllerPinClick = useCallback(() => {
    onPinClick(keep.id);
  }, [keep, onPinClick]);

  const onControllerUnPinClick = useCallback(() => {
    onUnPinClick(keep.id);
  }, [keep, onUnPinClick]);

  return (
    <div className={clsx(styles.root, className, { [styles.open]: keep.isOpen })}>
      <Preview value={keep.value} onClick={onItemClick} />
      <Controller
        className={styles.controller}
        isEditing={keep.isEditing}
        isPined={keep.isPined}
        onEdit={onControllerEditClick}
        onPreview={onControllerPreviewClick}
        onDelete={onDeleteClick}
        onPin={onControllerPinClick}
        onUnPin={onControllerUnPinClick}
      />
    </div>
  );
};

export default KeepListItem;

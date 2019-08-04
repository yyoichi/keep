import React, { memo, useCallback } from 'react';
import clsx from 'clsx';
import Preview from '../../modules/Preview/Preview';
import Controller from '../../modules/Controller/Controller';
import { Keep } from '../../store/keeps';
import styles from './KeepPreview.css';

interface Props {
  className?: string;
  keep: Keep;
  onEdit: () => void;
  onDelete: () => void;
}

const KeepPreview = ({ className, keep, onEdit, onDelete }: Props) => {
  const onEditClick = useCallback(() => {
    onEdit();
  }, [onEdit]);

  const onDeleteClick = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <div className={clsx(styles.root, className)}>
      <Preview value={keep.value} />
      <Controller onEdit={onEditClick} onDelete={onDeleteClick} />
    </div>
  );
};

export default memo((props: Props) => <KeepPreview {...props} />);

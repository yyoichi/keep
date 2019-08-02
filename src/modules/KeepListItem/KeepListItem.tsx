import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { Keep } from '../../store/keeps/keeps';
import Preview from '../Preview/Preview';
import styles from './KeepListItem.css';
import Modal from '../Modal/Modal';
import Editor from '../Editor/Editor';

interface Props {
  keep: Keep;
  isOpen: boolean;
  onDelete: (id: string) => void;
  onOpen: (id: string) => void;
  onClose: (id: string, value: string) => void;
}

const KeepListItem = ({ keep, isOpen, onDelete, onOpen, onClose }: Props) => {
  const [isEdit, setEdit] = useState(false);

  const onDeleteClick = useCallback(() => {
    onDelete(keep.id);
  }, [keep, onDelete]);

  const onItemOpen = useCallback(() => {
    onOpen(keep.id);
  }, [keep, onOpen]);

  const onPreviewClick = useCallback(() => {
    setEdit(true);
  }, []);

  const onEditorBlur = useCallback(
    (value: string) => {
      onClose(keep.id, value);
      setEdit(false);
    },
    [keep.id, onClose]
  );

  const cns = clsx(styles.root, { [styles.open]: isOpen });

  return (
    <>
      <div className={cns} onClick={onItemOpen}>
        <Preview className={styles.KeepListItem} value={keep.value} />
        <div className={styles.tools}>
          <button className={styles.delete} onClick={onDeleteClick}>
            ×
          </button>
        </div>
      </div>
      <Modal className={styles.modal} isOpen={isOpen}>
        {isEdit ? (
          <Editor defaultValue={keep.value} onBlur={onEditorBlur} />
        ) : (
          <Preview value={keep.value} onClick={onPreviewClick} />
        )}
      </Modal>
    </>
  );
};

export default KeepListItem;

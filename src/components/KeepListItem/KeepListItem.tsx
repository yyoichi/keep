import React, { useCallback, useState, memo } from 'react';
import clsx from 'clsx';
import { Keep } from '../../store/keeps';
import Modal from '../../modules/Modal/Modal';
import Editor from '../../modules/Editor/Editor';
import KeepPreview from '../KeepPreview/KeepPreview';
import styles from './KeepListItem.css';

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

  const onEditorBlur = useCallback(() => {
    const value = '';
    onClose(keep.id, value);
    setEdit(false);
  }, [keep.id, onClose]);

  const onEditorChange = useCallback((value: string) => {}, []);

  const onModalClose = useCallback(() => {
    onClose(keep.id, keep.value);
  }, [keep.id, keep.value, onClose]);

  const cns = clsx(styles.root, { [styles.open]: isOpen });

  return (
    <>
      <div className={cns} onClick={onItemOpen}>
        <KeepPreview className={styles.KeepListItem} keep={keep} onDelete={onDeleteClick} onEdit={onPreviewClick} />
      </div>
      <Modal className={styles.modal} isOpen={isOpen} outSideClick={onModalClose}>
        {isEdit ? (
          <Editor defaultValue={keep.value} onBlur={onEditorBlur} onChange={onEditorChange} />
        ) : (
          <KeepPreview className={styles.KeepListItem} keep={keep} onDelete={onDeleteClick} onEdit={onPreviewClick} />
        )}
      </Modal>
    </>
  );
};

export default memo((props: Props) => <KeepListItem {...props} />);

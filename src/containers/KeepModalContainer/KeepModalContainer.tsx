import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { keepActions, Keep } from '../../store/keeps';
import Modal from '../../modules/Modal/Modal';
import Preview from '../../modules/Preview/Preview';
import Controller from '../../modules/Controller/Controller';
import Editor from '../../modules/Editor/Editor';
import styles from './KeepModalContainer.css';

const openKeepSelector = (state: RootState) => state.keeps.items.find(keep => keep.isOpen);

const KeepModalContainer = () => {
  const keep: Keep = useSelector(openKeepSelector);

  const dispatch = useDispatch();

  const onOutSideClick = useCallback(() => {
    if (keep) {
      dispatch(keepActions.close(keep.id));
      dispatch(keepActions.preview(keep.id));
    }
  }, [keep, dispatch]);

  const onEditorBlur = useCallback(
    (value: string) => {
      dispatch(keepActions.update(keep.id, value));
    },
    [keep, dispatch]
  );

  const onControllerEditClick = useCallback(() => {
    dispatch(keepActions.edit(keep.id));
  }, [keep, dispatch]);

  const onControllerPreviewClick = useCallback(() => {
    dispatch(keepActions.preview(keep.id));
  }, [keep, dispatch]);

  return keep ? (
    <Modal className={styles.root} isOpen={keep.isOpen} outSideClick={onOutSideClick}>
      {keep.isEditing ? (
        <Editor className={styles.editor} defaultValue={keep.value} onBlur={onEditorBlur} />
      ) : (
        <Preview className={styles.preview} value={keep.value}></Preview>
      )}
      <Controller
        isEditing={keep.isEditing}
        onEdit={onControllerEditClick}
        onPreview={onControllerPreviewClick}
        onDelete={() => {}}
      />
    </Modal>
  ) : null;
};

export default KeepModalContainer;

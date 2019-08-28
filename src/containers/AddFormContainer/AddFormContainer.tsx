import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import nanoid from 'nanoid';
import { keepActions } from '../../store/keeps';
import Editor from '../../modules/Editor/Editor';
import styles from './AddFormContainer.css';

const AddFormContainer = () => {
  const dispatch = useDispatch();

  const [isOpen, toggleOpen] = useState(false);

  const onClick = useCallback(() => toggleOpen(isOpen => !isOpen), []);

  const onBlur = useCallback(
    (value: string) => {
      toggleOpen(isOpen => !isOpen);

      if (value) {
        dispatch(keepActions.add({ id: nanoid(), value: value, isOpen: false, isEditing: false }));
      }
    },
    [dispatch]
  );

  return isOpen ? (
    <Editor className={clsx(styles.root, { [styles.open]: isOpen })} onBlur={onBlur} />
  ) : (
    <div className={styles.root} onClick={onClick}>
      <p className={styles.label}>New keep...</p>
    </div>
  );
};

export default React.memo(() => <AddFormContainer />);

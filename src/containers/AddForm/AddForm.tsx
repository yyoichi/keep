import React, { useState, useCallback, useMemo } from 'react';
import Editor from '../../modules/Editor/Editor';
import { keepActions } from '../../store/keeps';
import clsx from 'clsx';
import styles from './AddForm.css';
import { useDispatch } from 'react-redux';
import { generateId } from '../../utils';

const AddForm = () => {
  const dispatch = useDispatch();

  const [isOpen, toggleOpen] = useState(false);
  const [value, setValue] = useState('');

  const onClick = useCallback(() => toggleOpen(isOpen => !isOpen), []);

  const onChange = useCallback((value: string) => setValue(value), []);

  const onBlur = useCallback(() => {
    toggleOpen(isOpen => !isOpen);

    const trimedValue = value.replace(/\n{3,}/gm, '\n\n').trim();
    if (trimedValue) {
      dispatch(keepActions.add({ id: generateId(), value: trimedValue, isOpen: false }));
    }
  }, [value, dispatch]);

  return isOpen ? (
    <Editor className={clsx(styles.root, { open: isOpen })} onBlur={onBlur} onChange={onChange} />
  ) : (
    <div className={styles.root} onClick={onClick}>
      <p className={styles.label}>New keep...</p>
    </div>
  );
};

export default React.memo(() => <AddForm />);

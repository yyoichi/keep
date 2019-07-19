import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import Editor from '../Editor/Editor';
import styles from './NewKeepForm.css';

interface Props {
  onBlur: (value: string) => void;
}

const NewKeepForm = (props: Props) => {
  const [isOpen, toggleOpen] = useState(false);
  const cns = clsx(styles.root, { [styles.open]: isOpen });

  const onBlur = useCallback(
    (value: string) => {
      props.onBlur(value);
      toggleOpen(isOpen => !isOpen);
    },
    [props]
  );

  const onClick = useCallback(() => {
    toggleOpen(isOpen => !isOpen);
  }, []);

  return isOpen ? (
    <Editor className={cns} onBlur={onBlur} />
  ) : (
    <div className={cns} onClick={onClick}>
      <p className={styles.label}>New keep...</p>
    </div>
  );
};

export default NewKeepForm;

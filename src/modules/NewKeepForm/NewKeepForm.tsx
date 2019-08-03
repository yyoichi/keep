import React, { useState, useCallback, memo } from 'react';
import clsx from 'clsx';
import Editor from '../Editor/Editor';
import styles from './NewKeepForm.css';

interface Props {
  onBlur: (value: string) => void;
}

const NewKeepForm = ({ onBlur }: Props) => {
  const [isOpen, toggleOpen] = useState(false);
  const cns = clsx(styles.root, { [styles.open]: isOpen });

  const onEditorBlur = useCallback(
    (value: string) => {
      onBlur(value);
      toggleOpen(isOpen => !isOpen);
    },
    [onBlur]
  );

  const onClick = useCallback(() => {
    toggleOpen(isOpen => !isOpen);
  }, []);

  return isOpen ? (
    <Editor className={cns} onBlur={onEditorBlur} />
  ) : (
    <div className={cns} onClick={onClick}>
      <p className={styles.label}>New keep...</p>
    </div>
  );
};

export default memo((props: Props) => <NewKeepForm {...props} />);

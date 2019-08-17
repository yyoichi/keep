import React, { useMemo, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Editor.css';

interface Props {
  className?: string;
  defaultValue?: string;
  onBlur: (value: string) => void;
}

const Editor = ({ className, defaultValue, onBlur }: Props) => {
  const rootClass = useMemo(() => clsx(styles.Editor, className), [className]);
  const editor = useRef<HTMLDivElement>(null);

  // Set default value
  useEffect(() => {
    editor.current.innerText = defaultValue || '';
    editor.current.focus();
  }, [defaultValue]);

  const onEditorBlur = useCallback(() => {
    const value = editor.current.innerText.replace(/\n{3,}/gm, '\n\n').trim();
    onBlur(value);
  }, [onBlur]);

  return <div className={rootClass} onBlur={onEditorBlur} ref={editor} contentEditable />;
};

export default Editor;

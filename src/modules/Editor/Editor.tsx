import React, { useMemo, useCallback, useRef, useEffect, FormEvent } from 'react';
import clsx from 'clsx';
import styles from './Editor.css';

interface Props {
  className?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

const Editor = ({ className, defaultValue, onChange, onBlur }: Props) => {
  const rootClass = useMemo(() => clsx(styles.Editor, className), [className]);
  const editor = useRef<HTMLDivElement>(null);

  // Set default value
  useEffect(() => {
    editor.current.innerText = defaultValue || '';
    editor.current.focus();
  }, [defaultValue]);

  const onTextChange = useCallback(
    (e: FormEvent<HTMLDivElement>) => {
      onChange(e.currentTarget.innerText);
    },
    [onChange]
  );

  const onEditorBlur = useCallback(() => {
    onBlur();
  }, [onBlur]);

  return <div className={rootClass} onInput={onTextChange} onBlur={onEditorBlur} ref={editor} contentEditable />;
};

export default Editor;

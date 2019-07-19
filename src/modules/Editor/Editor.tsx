import React, { useMemo, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Editor.css';

interface Props {
  className?: string;
  defaultValue?: string;
  onBlur: (value: string) => void;
}

const Editor = (props: Props) => {
  const cns = useMemo(() => clsx(styles.Editor, props.className), [props.className]);
  const editor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    editor.current.innerText = props.defaultValue || '';
    editor.current.focus();
  }, [props.defaultValue]);

  const onBlur = useCallback(() => {
    const text = editor.current.innerText.replace(/\n{3,}/gm, '\n\n');
    props.onBlur(text);
  }, [props]);

  return <div className={cns} onBlur={onBlur} ref={editor} contentEditable />;
};

export default Editor;

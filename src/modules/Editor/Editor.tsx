import React, {
  useMemo,
  FocusEvent,
  useCallback,
  FormEvent,
  useRef,
  useEffect
} from 'react';
import clsx from 'clsx';
import styles from './Editor.css';

interface Props {
  value: string;
  onBlur: (e: FocusEvent<HTMLDivElement>) => void;
  onInput: (value: string) => void;
}

const Editor = (props: Props) => {
  const cns = useMemo(() => clsx(styles.Editor), []);
  const editor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    editor.current.focus();
    editor.current.innerText = props.value;
  }, []);

  const onChange = useCallback((e: FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText.replace(/\n{3,}/gm, '\n\n');
    props.onInput(text);
  }, []);

  return (
    <div
      className={cns}
      onInput={onChange}
      onBlur={props.onBlur}
      ref={editor}
      contentEditable
    />
  );
};

export default Editor;

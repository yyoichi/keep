import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import Editor from './modules/Editor/Editor';
import styles from './index.css';

const App = () => {
  const [isEdit, setEdit] = useState(false);
  const [body, setBody] = useState('');

  const onChange = useCallback((value: string): void => {
    setBody(value);
  }, []);

  const toPreview = useCallback((): void => {
    setEdit(false);
  }, []);

  const toEditor = useCallback((): void => {
    setEdit(true);
  }, []);

  return (
    <div>
      {isEdit ? (
        <Editor value={body} onInput={onChange} onBlur={toPreview} />
      ) : (
        <div className={styles.Preview} onClick={toEditor}>
          <ReactMarkdown source={body} plugins={[breaks]} />
        </div>
      )}
    </div>
  );
};

render(<App />, document.querySelector('#root'));

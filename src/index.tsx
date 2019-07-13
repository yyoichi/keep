import React, { useState, useCallback, ChangeEvent } from 'react';
import { render } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import styles from './index.css';

const App = () => {
  const [isEdit, setEdit] = useState(false);
  const [body, setBody] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
    setBody(e.currentTarget.value);
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
        <textarea
          className={styles.Editor}
          onChange={onChange}
          onBlur={toPreview}
          defaultValue={body}
          autoFocus
        />
      ) : (
        <div className={styles.Preview} onClick={toEditor}>
          <ReactMarkdown source={body} plugins={[breaks]} />
        </div>
      )}
    </div>
  );
};

render(<App />, document.querySelector('#root'));

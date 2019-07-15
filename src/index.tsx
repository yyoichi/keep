import React, { useState, useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import Editor from './modules/Editor/Editor';
import Preview from './modules/Preview/Preview';
import './index.css';

const App = () => {
  const [isEdit, setEdit] = useState(false);
  const [body, setBody] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('value');
    setBody(savedValue);
  }, []);

  const onInput = useCallback((value: string): void => {
    setBody(value);
  }, []);

  const toPreview = useCallback((): void => {
    localStorage.setItem('value', body);
    setEdit(false);
  }, [body]);

  const toEditor = useCallback((): void => {
    setEdit(true);
  }, []);

  return (
    <div>
      {isEdit ? (
        <Editor value={body} onInput={onInput} onBlur={toPreview} />
      ) : (
        <Preview value={body} onClick={toEditor} />
      )}
    </div>
  );
};

render(<App />, document.querySelector('#root'));

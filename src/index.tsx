import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { render } from 'react-dom';
import { Keep } from './domain/keep';
import NewKeepForm from './modules/NewKeepForm/NewKeepForm';
import KeepList from './modules/KeepList/KeepList';
import KeepListItem from './modules/KeepListItem/KeepListItem';
import './index.css';

const App = () => {
  const [keeps, setKeeps] = useState<Keep[]>([]);

  useEffect(() => {
    const savedKeeps = localStorage.getItem('keeps');
    if (savedKeeps) {
      const keeps = JSON.parse(savedKeeps);
      setKeeps(keeps);
    }
  }, []);

  const save = useCallback((keeps: Keep[]) => {
    localStorage.setItem('keeps', JSON.stringify(keeps));
  }, []);

  const onNewKeepFormBlur = useCallback(
    (value: string) => {
      if (value.trim()) {
        const newKeeps = [...keeps, { id: keeps.length, value }];
        save(newKeeps);
        setKeeps(newKeeps);
      }
    },
    [keeps, save]
  );

  const deleteKeep = useCallback(
    (id: number) => {
      const newKeeps = keeps.filter(keep => keep.id !== id);
      save(newKeeps);
      setKeeps(newKeeps);
    },
    [keeps, save]
  );

  const keepItems = useMemo(() => keeps.map(keep => <KeepListItem keep={keep} onDelete={deleteKeep} key={keep.id}></KeepListItem>), [keeps, deleteKeep]);

  return (
    <div>
      <NewKeepForm onBlur={onNewKeepFormBlur} />
      <KeepList>{keepItems}</KeepList>
    </div>
  );
};

render(<App />, document.querySelector('#root'));

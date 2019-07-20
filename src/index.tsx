import React, { useCallback, useEffect, useMemo } from 'react';
import { render } from 'react-dom';
import KeepsProvider, {
  Keep,
  KeepsContext,
  KeepsConsumer
} from './store/keeps/keeps';
import NewKeepForm from './modules/NewKeepForm/NewKeepForm';
import KeepList from './modules/KeepList/KeepList';
import KeepListItem from './modules/KeepListItem/KeepListItem';
import { generateId } from './utils';
import './index.css';

const App = ({ keeps, addKeep, addKeeps, deleteKeep }: KeepsContext) => {
  useEffect(() => {
    const savedKeeps = localStorage.getItem('keeps');
    if (savedKeeps) {
      const keeps = JSON.parse(savedKeeps);
      addKeeps(keeps);
    }
  }, [addKeeps]);

  const save = useCallback((keeps: Keep[]) => {
    localStorage.setItem('keeps', JSON.stringify(keeps));
  }, []);

  useEffect(() => {
    save(keeps);
  }, [keeps, save]);

  const onNewKeepFormBlur = useCallback(
    (value: string) => {
      if (value.trim()) {
        const newKeep = { id: generateId(), value };
        addKeep(newKeep);
      }
    },
    [addKeep]
  );

  const keepItems = useMemo(
    () =>
      keeps.map(keep => {
        return (
          <KeepListItem
            keep={keep}
            onDelete={deleteKeep}
            key={keep.id}
          ></KeepListItem>
        );
      }),
    [keeps, deleteKeep]
  );

  return (
    <div>
      <NewKeepForm onBlur={onNewKeepFormBlur} />
      <KeepList>{keepItems}</KeepList>
    </div>
  );
};

render(
  <KeepsProvider>
    <KeepsConsumer>{state => <App {...state} />}</KeepsConsumer>
  </KeepsProvider>,
  document.querySelector('#root')
);

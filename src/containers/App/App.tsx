import React, { useEffect, useCallback, useMemo } from 'react';
import { Keep, KeepsContext } from '../../store/keeps/keeps';
import { generateId } from '../../utils';
import KeepList from '../../modules/KeepList/KeepList';
import KeepListItem from '../../modules/KeepListItem/KeepListItem';
import NewKeepForm from '../../modules/NewKeepForm/NewKeepForm';

const App = ({
  keeps,
  addKeep,
  addKeeps,
  editKeep,
  deleteKeep,
  openKeep,
  closeKeep
}: KeepsContext) => {
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
        const newKeep: Keep = { id: generateId(), value, isOpen: false };
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
            isOpen={keep.isOpen}
            onDelete={deleteKeep}
            onOpen={() => {
              openKeep(keep.id);
            }}
            onClose={(id: string, value: string) => {
              closeKeep(keep.id);
              if (value.trim()) {
                editKeep(id, value);
              }
            }}
            key={keep.id}
          ></KeepListItem>
        );
      }),
    [keeps, deleteKeep, openKeep, closeKeep, editKeep]
  );

  return (
    <div>
      <NewKeepForm onBlur={onNewKeepFormBlur} />
      <KeepList>{keepItems}</KeepList>
    </div>
  );
};

export default App;

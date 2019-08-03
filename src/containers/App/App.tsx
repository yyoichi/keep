import React, { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateId } from '../../utils';
import KeepList from '../../modules/KeepList/KeepList';
import KeepListItem from '../../modules/KeepListItem/KeepListItem';
import NewKeepForm from '../../modules/NewKeepForm/NewKeepForm';
import { RootState } from '../../store';
import { Keep, keepActions } from '../../store/keeps';

const keepsSelector = (state: RootState) => state.keeps;

const App = () => {
  const keeps = useSelector(keepsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedKeeps = localStorage.getItem('keeps');
    if (savedKeeps) {
      const keeps = JSON.parse(savedKeeps);
      dispatch(keepActions.add(keeps));
    }
  }, [dispatch]);

  const save = useCallback((keeps: Keep[]) => {
    localStorage.setItem('keeps', JSON.stringify(keeps));
  }, []);

  useEffect(() => {
    save(keeps.items);
  }, [keeps, save]);

  const onNewKeepFormBlur = useCallback(
    (value: string) => {
      if (value.trim()) {
        const newKeep: Keep = { id: generateId(), value, isOpen: false };
        dispatch(keepActions.add(newKeep));
      }
    },
    [dispatch]
  );

  const deleteKeep = useCallback(
    (id: string) => {
      dispatch(keepActions.delete(id));
    },
    [dispatch]
  );

  const openKeep = useCallback(
    (id: string) => {
      dispatch(keepActions.open(id));
    },
    [dispatch]
  );

  const closeKeep = useCallback(
    (id: string, value: string) => {
      dispatch(keepActions.close(id));
      if (value.trim()) {
        dispatch(keepActions.update(id, value));
      }
    },
    [dispatch]
  );

  const keepItems = useMemo(
    () =>
      keeps.items.map(keep => {
        return (
          <KeepListItem
            keep={keep}
            isOpen={keep.isOpen}
            onDelete={deleteKeep}
            onOpen={openKeep}
            onClose={closeKeep}
            key={keep.id}
          ></KeepListItem>
        );
      }),
    [keeps, deleteKeep, openKeep, closeKeep]
  );

  return (
    <div>
      <NewKeepForm onBlur={onNewKeepFormBlur} />
      <KeepList>{keepItems}</KeepList>
    </div>
  );
};

export default App;

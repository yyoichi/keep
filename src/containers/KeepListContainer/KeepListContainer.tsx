import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { keepActions } from '../../store/keeps';
import KeepList from '../../components/KeepList/KeepList';
import KeepListItem from '../../components/KeepListItem/KeepListItem';
import styles from './KeepListContainer.css';

const keepsSelector = (state: RootState) => state.keeps;

const KeepListContainer = () => {
  const dispatch = useDispatch();

  const keeps = useSelector(keepsSelector);

  const onDelete = useCallback(
    (id: string) => {
      dispatch(keepActions.delete(id));
    },
    [dispatch]
  );

  const onOpen = useCallback(
    (id: string) => {
      dispatch(keepActions.open(id));
    },
    [dispatch]
  );

  const onEditClick = useCallback(
    (id: string) => {
      dispatch(keepActions.edit(id));
    },
    [dispatch]
  );

  const onPreviewClick = useCallback(
    (id: string) => {
      dispatch(keepActions.preview(id));
    },
    [dispatch]
  );

  return (
    <KeepList className={styles.root}>
      {keeps.items.map(item => (
        <KeepListItem
          keep={item}
          onDelete={onDelete}
          onOpen={onOpen}
          onEditClick={onEditClick}
          onPreviewClick={onPreviewClick}
          key={item.id}
        />
      ))}
    </KeepList>
  );
};

export default KeepListContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { keepActions } from '../../store/keeps';
import AddFormContainer from '../AddFormContainer/AddFormContainer';
import KeepListContainer from '../KeepListContainer/KeepListContainer';
import KeepModalContainer from '../KeepModalContainer/KeepModalContainer';

const keepsSelector = (state: RootState) => state.keeps;

const AppContainer = () => {
  const keeps = useSelector(keepsSelector);
  const dispatch = useDispatch();

  // Load keeps from local storage
  useEffect(() => {
    const savedKeeps = JSON.parse(localStorage.getItem('keeps'));
    if (savedKeeps) {
      dispatch(keepActions.add(savedKeeps));
    }
  }, [dispatch]);

  // Save when keep changed
  useEffect(() => {
    dispatch(keepActions.save(keeps.items));
  }, [keeps, dispatch]);

  return (
    <div>
      <AddFormContainer />
      <KeepListContainer />
      <KeepModalContainer />
    </div>
  );
};

export default AppContainer;

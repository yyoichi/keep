import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { KeepsState, keepsReducer, KeepActionTypes } from './keeps';

export interface RootState {
  keeps: KeepsState;
}

type RootActions = KeepActionTypes;

const rootReducer = combineReducers<RootState, RootActions>({
  keeps: keepsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;

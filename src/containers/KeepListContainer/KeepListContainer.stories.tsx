import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import KeepListContainer from './KeepListContainer';
import configureStore from 'redux-mock-store';
import { RootState } from '../../store';

const mockStore = configureStore<RootState>();
const store = mockStore({
  keeps: {
    items: [
      {
        id: 'a',
        value: 'test',
        isEditing: false,
        isOpen: false
      }
    ]
  }
});

storiesOf('KeepListContainer', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <KeepListContainer />);

import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RootState } from '../../store';
import KeepModalContainer from './KeepModalContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore<RootState>();

storiesOf('KeepModalContainer', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const isEditing = boolean('editing', false);
    const store = mockStore({
      keeps: {
        items: [
          {
            id: 'a',
            value: 'test',
            isEditing,
            isOpen: true,
            isPined: false
          }
        ]
      }
    });
    return (
      <Provider store={store}>
        <KeepModalContainer />
      </Provider>
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import AddFormContainer from './AddFormContainer';
import store from '../../store';

storiesOf('AddFormContainer', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <AddFormContainer />);

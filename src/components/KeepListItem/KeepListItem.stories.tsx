import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import store from '../../store';
import KeepListItem from './KeepListItem';

storiesOf('KeepListItem', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => (
    <KeepListItem
      keep={{ id: 'a', value: 'test', isOpen: false, isEditing: false, isPined: false }}
      onDelete={() => {}}
      onEditClick={() => {}}
      onOpen={() => {}}
      onPreviewClick={() => {}}
      onPinClick={() => {}}
      onUnPinClick={() => {}}
    />
  ));

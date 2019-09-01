import React from 'react';
import { storiesOf } from '@storybook/react';
import KeepList from './KeepList';
import KeepListItem from '../KeepListItem/KeepListItem';

storiesOf('KeepList', module).add('default', () => (
  <KeepList label="PIN KEEPS">
    <KeepListItem
      keep={{ id: 'a', value: 'test', isEditing: false, isOpen: false, isPined: false }}
      onDelete={() => {}}
      onEditClick={() => {}}
      onOpen={() => {}}
      onPreviewClick={() => {}}
      onPinClick={() => {}}
      onUnPinClick={() => {}}
    />
  </KeepList>
));

import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import store from '../../store';
import Controller from './Controller';

storiesOf('Controller', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('isEditing = false', () => (
    <Controller isEditing={false} onDelete={() => {}} onEdit={() => {}} onPreview={() => {}} />
  ))
  .add('isEditing = true', () => (
    <Controller isEditing={true} onDelete={() => {}} onEdit={() => {}} onPreview={() => {}} />
  ));

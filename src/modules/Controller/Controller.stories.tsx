import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Controller from './Controller';

storiesOf('Controller', module)
  .addDecorator(withKnobs)
  .add('isEditing = false', () => {
    const isEditing = boolean('Edit Mode', false);
    const isPined = boolean('Pin', false);
    return (
      <Controller
        isEditing={isEditing}
        isPined={isPined}
        onDelete={() => {}}
        onEdit={() => {}}
        onPreview={() => {}}
        onPin={() => {}}
        onUnPin={() => {}}
      />
    );
  });

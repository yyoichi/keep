import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

storiesOf('IconButton', module).add('default', () => (
  <IconButton>
    <FontAwesomeIcon icon={faUser} />
  </IconButton>
));

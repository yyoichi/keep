import React from 'react';
import { render } from 'react-dom';
import KeepsProvider, { KeepsConsumer } from './store/keeps/keeps';
import App from './containers/App/App';
import './index.css';

render(
  <KeepsProvider>
    <KeepsConsumer>{state => <App {...state} />}</KeepsConsumer>
  </KeepsProvider>,
  document.querySelector('#root')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './js/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/main.css';
import Application from './js/App';
const App = () => (
  <Application />
);

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  render(
    <Provider store={Store}>
      <App />
    </Provider>
    , rootElement);
});

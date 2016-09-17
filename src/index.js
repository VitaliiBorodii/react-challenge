import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>Hello world!</div>
);

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  render(<App />, rootElement);
});

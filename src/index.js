import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './imports/App';
import ViewModel from 'viewmodel-react';

window.ViewModel = ViewModel;

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

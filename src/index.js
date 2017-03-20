import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from './components/router';

import './styles/index.less'

ReactDOM.render(
    <Router><App /></Router>,
  document.getElementById('root')
);

// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
  registerServiceWorker();
}

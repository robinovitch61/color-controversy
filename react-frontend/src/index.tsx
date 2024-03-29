import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import Plausible from 'plausible-tracker';

const plausible = Plausible({
  domain: 'colorcontroversy.com',
  apiHost: 'https://plausible.theleo.zone',
});

plausible.enableAutoPageviews();

const store = createStore(reducer, devToolsEnhancer({}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

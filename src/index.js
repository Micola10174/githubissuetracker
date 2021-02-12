import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { multiClientMiddleware } from 'redux-axios-middleware';
import reportWebVitals from './reportWebVitals';
import './style/index.scss';

import api from './api/api.js';
import routes from './routes/routes';
import rootReducer from './reducers';



const history = createBrowserHistory();
const appRouterMiddleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(multiClientMiddleware(api), appRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer(history), {}, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history} children={routes} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import Routes from './containers/Routes';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
                    <Routes />
                </Provider>, document.getElementById('root'));
registerServiceWorker();

import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers/reducer';
import { watchMusic } from './sagas/index';

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchMusic);

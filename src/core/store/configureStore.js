import createSagaMiddleware from '@redux-saga/core';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

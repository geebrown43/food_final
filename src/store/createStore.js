import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/rootReducer';

let middleWare = [thunk];

if (__DEV__) {
    const reduxImmutableState = require('redux-immutable-state-invariant').default();
    middleWare = [...middleWare, reduxImmutableState, logger];
} else {
    middleWare = [...middleWare];
}

export default configureStore = () => {
    return createStore(reducer, applyMiddleware(...middleWare));
}


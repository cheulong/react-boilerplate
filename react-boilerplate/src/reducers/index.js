import { combineReducers } from 'redux';
import starter_reducer from './starter_reducer';
import firebase_reducer from './firebase_reducer';
export default combineReducers({
    names: starter_reducer,
    namesFire: firebase_reducer
});

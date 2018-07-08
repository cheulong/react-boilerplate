import { FETCH_NAME } from '../actions/types';
import data from './name-list.json';

const INITIAL_STATE = data;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NAME: {
            return {
                ...state,
                names: action.payload            
            };
        }
        default:
            return state;
    }
};

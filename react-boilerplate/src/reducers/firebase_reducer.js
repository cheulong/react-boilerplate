import { FETCH_NAME_FIRE } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case FETCH_NAME_FIRE: {       
            return action.payload;
        }
        default:
            return state;
    }
};

import { FETCH_NAME } from './types';

export const fetchNames = (names) => {
    return {
        type: FETCH_NAME,
        payload: names
    }
};
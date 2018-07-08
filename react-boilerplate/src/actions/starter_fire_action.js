import {
    FETCH_NAME_FIRE
} from './types';
import {
    database
} from './../Firebase';

export const fetchNamesFire = () => {
    console.log('hi');
    
        return dispatch => {
                database.ref(`/names`).on('value', db => {                       
                    dispatch({
                            type: FETCH_NAME_FIRE,
                            payload: db.val()
                        });
                    })
                };
            }
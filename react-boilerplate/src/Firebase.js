import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    //FIREBASE CODE
};
firebase.initializeApp(config);
export const database = firebase.database();

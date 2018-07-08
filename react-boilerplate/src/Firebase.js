import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCh33nqeqhbjvJOs49Ze-zOeMJ_lDG584A",
    authDomain: "react-data-2d8e3.firebaseapp.com",
    databaseURL: "https://react-data-2d8e3.firebaseio.com",
    projectId: "react-data-2d8e3",
    storageBucket: "react-data-2d8e3.appspot.com",
    messagingSenderId: "460561812208"
};
firebase.initializeApp(config);
export const database = firebase.database();

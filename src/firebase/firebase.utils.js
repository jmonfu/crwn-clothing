import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCa6JnmK4QT9YjkdBekzFR5WkbV5BTxSQ",
    authDomain: "crwn-db-4e1e6.firebaseapp.com",
    databaseURL: "https://crwn-db-4e1e6.firebaseio.com",
    projectId: "crwn-db-4e1e6",
    storageBucket: "crwn-db-4e1e6.appspot.com",
    messagingSenderId: "777126181235",
    appId: "1:777126181235:web:0a1d977553dc926f1a2d06",
    measurementId: "G-PPXESWZZEB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

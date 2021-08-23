import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDn2paDetnjHTwD2Fwfx3nk2gJBuVDES6c",
    authDomain: "clone-fortnite.firebaseapp.com",
    projectId: "clone-fortnite",
    storageBucket: "clone-fortnite.appspot.com",
    messagingSenderId: "33863130613",
    appId: "1:33863130613:web:0f436f4f9bf0d59dc614bc"
  })
    
  };


export default firebase;
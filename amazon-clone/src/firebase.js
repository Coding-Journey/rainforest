import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvZATsyGB8p_X5BMEpXjCWOGqMrc19Qys",
    authDomain: "clone-a17ca.firebaseapp.com",
    databaseURL: "https://clone-a17ca.firebaseio.com",
    projectId: "clone-a17ca",
    storageBucket: "clone-a17ca.appspot.com",
    messagingSenderId: "28920471669",
    appId: "1:28920471669:web:ee660cb79ce386948ed83c",
    measurementId: "G-NDHRS9W97J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
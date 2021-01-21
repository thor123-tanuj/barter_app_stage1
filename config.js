import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCW4_UMdX9PnT2UBpSnPqIAHsIqK3-Ib2Q",
    authDomain: "barter-app-246dc.firebaseapp.com",
    projectId: "barter-app-246dc",
    storageBucket: "barter-app-246dc.appspot.com",
    messagingSenderId: "1740972559",
    appId: "1:1740972559:web:33c8029527c2bbe589b97a",
    measurementId: "G-3GBKR3Q04H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
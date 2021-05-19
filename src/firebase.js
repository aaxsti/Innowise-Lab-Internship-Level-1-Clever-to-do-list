import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyBXWRGcPnZuFLw4N4LoxVZ_IxtwBwQOKFU",
    authDomain: "react-todo-a3d38.firebaseapp.com",
    projectId: "react-todo-a3d38",
    storageBucket: "react-todo-a3d38.appspot.com",
    messagingSenderId: "577834159246",
    appId: "1:577834159246:web:3195df3682bcb0eb0dcddf"
});

const db = firebase.firestore();

export { db };
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9fK68Tk74Ok9lt7rM6fSPyTcMK1sP3U0",
    authDomain: "react-apps-curso-59e3f.firebaseapp.com",
    projectId: "react-apps-curso-59e3f",
    storageBucket: "react-apps-curso-59e3f.appspot.com",
    messagingSenderId: "40686999878",
    appId: "1:40686999878:web:035698da2a6f795da76d47"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}
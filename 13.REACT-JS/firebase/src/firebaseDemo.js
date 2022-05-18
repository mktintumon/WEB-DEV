// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYdxVkoHcC2xiY3peacn4bmlLfO58WV2Q",
  authDomain: "first-demo-edf48.firebaseapp.com",
  projectId: "first-demo-edf48",
  storageBucket: "first-demo-edf48.appspot.com",
  messagingSenderId: "561506231874",
  appId: "1:561506231874:web:6eb04eb384a259ae8f6fdb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmIVuB70-s2v0ybn9mHnVcwmV-JZC9hEA",
  authDomain: "travigo-bd1c8.firebaseapp.com",
  projectId: "travigo-bd1c8",
  storageBucket: "travigo-bd1c8.appspot.com",
  messagingSenderId: "856079920406",
  appId: "1:856079920406:web:ac5cbc774f6ab4355fb437",
  measurementId: "G-V57DV752XN"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebase);

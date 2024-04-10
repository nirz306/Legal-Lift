// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpmrUyBQWTrByT9Q_y0ig7yrYV4S-Zh98",
  authDomain: "legal-lift.firebaseapp.com",
  projectId: "legal-lift",
  storageBucket: "legal-lift.appspot.com",
  messagingSenderId: "891905967125",
  appId: "1:891905967125:web:4f8947cceef1d142487a1c",
  measurementId: "G-L1ZYRX1TCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth();

export {app,auth};
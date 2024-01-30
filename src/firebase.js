// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase.auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpeQ_YEBqgbbH83ILiaONsEL1qa8QItgE",
  authDomain: "react-auth-b0fe4.firebaseapp.com",
  projectId: "react-auth-b0fe4",
  storageBucket: "react-auth-b0fe4.appspot.com",
  messagingSenderId: "591474048777",
  appId: "1:591474048777:web:bbe944ff0a051f88355dd8",
  measurementId: "G-S7D62B3FMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
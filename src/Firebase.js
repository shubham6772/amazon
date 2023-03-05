import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpEOu3J-5vxUtiQHF7LXIJWr2YcKbMzn0",
  authDomain: "clone-ef17c.firebaseapp.com",
  projectId: "clone-ef17c",
  storageBucket: "clone-ef17c.appspot.com",
  messagingSenderId: "1060479795586",
  appId: "1:1060479795586:web:419984a758a686d16bcf9b",
  measurementId: "G-8EH17LV63B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

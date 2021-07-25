import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACMEtbuZ-10s2zP8lUVIfGEDnjQdww0bo",
  authDomain: "clone-342ce.firebaseapp.com",
  projectId: "clone-342ce",
  storageBucket: "clone-342ce.appspot.com",
  messagingSenderId: "775378241817",
  appId: "1:775378241817:web:799759f53253cf6a769d88",
  measurementId: "G-BT4QL0CNYC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
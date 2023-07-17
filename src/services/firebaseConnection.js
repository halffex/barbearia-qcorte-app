import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiwNmPyKmturnkqHQYJ97lUJMa70dByrE",
  authDomain: "barbearia-app-2ca1d.firebaseapp.com",
  projectId: "barbearia-app-2ca1d",
  storageBucket: "barbearia-app-2ca1d.appspot.com",
  messagingSenderId: "994696224081",
  appId: "1:994696224081:web:62893cb908af0383878770"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
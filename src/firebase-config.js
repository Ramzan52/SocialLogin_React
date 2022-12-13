import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1R0MYDU90VUS1PBKZ40MJKZKJdeQCdv8",
  authDomain: "learning-652bb.firebaseapp.com",
  projectId: "learning-652bb",
  storageBucket: "learning-652bb.appspot.com",
  messagingSenderId: "544198394759",
  appId: "1:544198394759:web:d1a1f474fb3b1123c24922",
  measurementId: "G-J8ETSFP789",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();

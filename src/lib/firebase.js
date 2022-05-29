import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1yy856TscikcxxNfOfJ2sZ8UTPLMVpEY",
  authDomain: "animino-17c6a.firebaseapp.com",
  projectId: "animino-17c6a",
  storageBucket: "animino-17c6a.appspot.com",
  messagingSenderId: "356421256501",
  appId: "1:356421256501:web:7db6e5bd6eef4eb11db87c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

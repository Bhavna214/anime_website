// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


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

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {auth,db,storage}

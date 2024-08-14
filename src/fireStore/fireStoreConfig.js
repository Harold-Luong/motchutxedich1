// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Al0yGlFH9SgHCqfnyCzHvA33REKY6DI",
  authDomain: "motchutxedich.firebaseapp.com",
  databaseURL:
    "https://motchutxedich-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "motchutxedich",
  storageBucket: "motchutxedich.appspot.com",
  messagingSenderId: "636842774237",
  appId: "1:636842774237:web:3389b089398c8eaf039534",
  measurementId: "G-RX3H4H37K8",
};

const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const db = getFirestore(app);

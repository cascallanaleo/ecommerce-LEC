import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoe0MzTOiDEHFhdqP-y21YvEINZtfLES0",
  authDomain: "react-lec.firebaseapp.com",
  projectId: "react-lec",
  storageBucket: "react-lec.firebasestorage.app",
  messagingSenderId: "965996909248",
  appId: "1:965996909248:web:d479580fe6204479bd9325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
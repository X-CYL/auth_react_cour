// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  /*apiKey: "AIzaSyA_9Wouim01_JlNMF1Dp0RSbiCnZuQpxVI",
  authDomain: "todolist-d092f.firebaseapp.com",
  projectId: "todolist-d092f",
  storageBucket: "todolist-d092f.appspot.com",
  messagingSenderId: "736479390486",
  appId: "1:736479390486:web:20dfcf080dc79815a5be37",*/
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

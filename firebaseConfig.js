// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpte9l0Ou2SShoPBb0aIp8Z2MPviYelWE",
  authDomain: "fitness-club-59057.firebaseapp.com",
  projectId: "fitness-club-59057",
  storageBucket: "fitness-club-59057.appspot.com",
  messagingSenderId: "148318263881",
  appId: "1:148318263881:web:a8400594c3999a745ebd98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

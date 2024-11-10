// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYha9mAoqgkUju0GfOcKEnk-3nDMeFdSo",
  authDomain: "voltis-629b5.firebaseapp.com",
  projectId: "voltis-629b5",
  storageBucket: "voltis-629b5.appspot.com",
  messagingSenderId: "266301302365",
  appId: "1:266301302365:web:a1476f8cc22aae60c9cfb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
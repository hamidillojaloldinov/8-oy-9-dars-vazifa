import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3eyNakcXhozIHpjgZATLi4ruUNKmpA5I",
  authDomain: "sakkizinchi-oy-exzam.firebaseapp.com",
  projectId: "sakkizinchi-oy-exzam",
  storageBucket: "sakkizinchi-oy-exzam.appspot.com",
  messagingSenderId: "787785671813",
  appId: "1:787785671813:web:4adf4845a666366d01b5ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeFUTD_hZXvPqc6xvEK5Z-B3mtgPwRC58",
  authDomain: "lost-it-7552a.firebaseapp.com",
  projectId: "lost-it-7552a",
  storageBucket: "lost-it-7552a.firebasestorage.app",
  messagingSenderId: "631466300725",
  appId: "1:631466300725:web:cd5946355a7fada648287c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
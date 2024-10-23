import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkk0LEERGStm-QOdlDnO3IsMKvN6Ub3n8",
  authDomain: "client-6bc79.firebaseapp.com",
  projectId: "client-6bc79",
  storageBucket: "client-6bc79.appspot.com",
  messagingSenderId: "814256773172",
  appId: "1:814256773172:web:e5d08fdce39fd867fa9261",
  measurementId: "G-0TX78EZK2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

 export { firestore, storage };
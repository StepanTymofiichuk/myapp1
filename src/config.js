// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries\
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjGBeFNTHSb7bTUgnEeVzB6pTCTcFADFo",
  authDomain: "englishstudent-c462f.firebaseapp.com",
  projectId: "englishstudent-c462f",
  storageBucket: "englishstudent-c462f.appspot.com",
  messagingSenderId: "202605445034",
  appId: "1:202605445034:web:281ca1a60bf7e639da75d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB2f9tGQB3YAFg1IHTyHfbOR44jM5U9CQ",
  authDomain: "tasklist-c553b.firebaseapp.com",
  projectId: "tasklist-c553b",
  storageBucket: "tasklist-c553b.appspot.com",
  messagingSenderId: "770672239584",
  appId: "1:770672239584:web:ac455da178dcc12f754185",
  measurementId: "G-KSP15EVN1S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
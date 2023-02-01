// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyP65b2r1MUQmeakwU2yf-PCC51m7MiAY",
  authDomain: "galaxy-cinema-e1620.firebaseapp.com",
  projectId: "galaxy-cinema-e1620",
  storageBucket: "galaxy-cinema-e1620.appspot.com",
  messagingSenderId: "346184536961",
  appId: "1:346184536961:web:14c564d2d512509a8ace80",
  measurementId: "G-VB9L96VLBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
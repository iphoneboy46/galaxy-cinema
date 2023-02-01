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
  databaseURL: "https://galaxy-cinema-e1620-default-rtdb.firebaseio.com",
  projectId: "galaxy-cinema-e1620",
  storageBucket: "galaxy-cinema-e1620.appspot.com",
  messagingSenderId: "346184536961",
  appId: "1:346184536961:web:5056f181257a32a88ace80",
  measurementId: "G-9ZE1CHG7PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
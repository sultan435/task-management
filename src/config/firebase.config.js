// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs2A-fHKlMy3keq0dz8HDMziJ_YS0S270",
  authDomain: "task-management-65ad4.firebaseapp.com",
  projectId: "task-management-65ad4",
  storageBucket: "task-management-65ad4.appspot.com",
  messagingSenderId: "422603672781",
  appId: "1:422603672781:web:fb6640232bd2477e3d2d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
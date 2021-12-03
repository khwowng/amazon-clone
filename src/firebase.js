// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUWIjv_uvJlQm_l3KKrs6532zwm8d1EYI",
  authDomain: "clone-a3edf.firebaseapp.com",
  projectId: "clone-a3edf",
  storageBucket: "clone-a3edf.appspot.com",
  messagingSenderId: "904476827946",
  appId: "1:904476827946:web:5953b3febb95ede5e83e53",
  measurementId: "G-K4TC6RKHPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

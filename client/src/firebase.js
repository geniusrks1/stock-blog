// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "stocknews-30466.firebaseapp.com",
  projectId: "stocknews-30466",
  storageBucket: "stocknews-30466.appspot.com",
  messagingSenderId: "792706534423",
  appId: "1:792706534423:web:ffdb4f7f79ece6544ee052",
  measurementId: "G-LEWJYRWP0D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
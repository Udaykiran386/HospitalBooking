// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsNAI75C9LnHi_daPtQNQfAV8lU4b2fPE",
    authDomain: "doctor-appointment-a5191.firebaseapp.com",
    projectId: "doctor-appointment-a5191",
    storageBucket: "doctor-appointment-a5191.appspot.com",
    messagingSenderId: "369896669698",
    appId: "1:369896669698:web:a38468edf7515d99069d1b",
    measurementId: "G-CXKVFNW4WM"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase authentication instance
export const auth = getAuth(app);

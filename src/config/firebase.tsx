// Import necessary functions from Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object containing API keys and other settings
const firebaseConfig = {
  apiKey: "AIzaSyAoBXO3_ckMMqCbuRIO9Ey-4bYyaAf2NUA",
  authDomain: "my-site-solution.firebaseapp.com",
  projectId: "my-site-solution",
  storageBucket: "my-site-solution.appspot.com",
  messagingSenderId: "406694341517",
  appId: "1:406694341517:web:0cfe5a7562b2ab8dc1ebc4"
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Export Firebase services to be used in other parts of the application
export const realTimeDB = getDatabase(app); // Realtime Database
export const auth = getAuth(app); // Authentication
export const storage = getStorage(app); // Cloud Storage
export const fireStoreDB = getFirestore(app); // Firestore (Cloud Firestore)
export const firebase = app; // Export the entire Firebase app if needed

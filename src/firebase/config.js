// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain:  import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_REACT_APP_MESSAGING_SENDER,
  appId:  import.meta.env.VITE_REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const auth=getAuth(app)
export const db=getFirestore(app)

export { storage, app };
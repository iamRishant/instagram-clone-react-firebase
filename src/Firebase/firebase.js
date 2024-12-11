
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnlzGwkA1A_u_uwnS6J8ejT-QQ3p5fJbM",
  authDomain: "instagram-clone-f6cce.firebaseapp.com",
  projectId: "instagram-clone-f6cce",
  storageBucket: "instagram-clone-f6cce.firebasestorage.app",
  messagingSenderId: "883457218776",
  appId: "1:883457218776:web:c6eeeab4aac5bd5a5e9fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// till here it will create me an app in the firbase

const auth = getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);

export {app, auth, firestore, storage};
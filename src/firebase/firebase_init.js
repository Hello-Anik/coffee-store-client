// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXVjIdsxfTeDUvpdzZCVQuRE5M7lUeXQE",
  authDomain: "coffee-store-app-336db.firebaseapp.com",
  projectId: "coffee-store-app-336db",
  storageBucket: "coffee-store-app-336db.firebasestorage.app",
  messagingSenderId: "1024715000611",
  appId: "1:1024715000611:web:5c26f068fae79772de5a96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
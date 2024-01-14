// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRvrA1yljomUnvKI4YK2i3eoqQ9Qky-lA",
  authDomain: "email-password-authentic-acc64.firebaseapp.com",
  projectId: "email-password-authentic-acc64",
  storageBucket: "email-password-authentic-acc64.appspot.com",
  messagingSenderId: "666150039973",
  appId: "1:666150039973:web:ac1ba689870935bf41784c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
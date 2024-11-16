import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjk-jMeZFXiE0BbNiNJDavNJ9ThFX-k4s",
  authDomain: "mobile-dev-1bb66.firebaseapp.com",
  projectId: "mobile-dev-1bb66",
  storageBucket: "mobile-dev-1bb66.firebasestorage.app",
  messagingSenderId: "137744606",
  appId: "1:137744606:web:b111cba6e9cdb76459324f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
// android : 137744606-mgitrkrte509j8jpl0gma3vdvruj63np.apps.googleusercontent.com
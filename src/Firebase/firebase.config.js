// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQyMsuDY-hwKlRxLFNRSF8_HvjpS4Hfeg",
  authDomain: "login-firebase-projects.firebaseapp.com",
  projectId: "login-firebase-projects",
  storageBucket: "login-firebase-projects.appspot.com",
  messagingSenderId: "624188770300",
  appId: "1:624188770300:web:7daf781a31dde6bd01d479",
  measurementId: "G-FR1PBXQE1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
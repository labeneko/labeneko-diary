// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCRgWbWsb_xn8DzsjF6LFeRo_LKbAbAvY",
  authDomain: "labeneko-diary-2c388.firebaseapp.com",
  projectId: "labeneko-diary-2c388",
  storageBucket: "labeneko-diary-2c388.appspot.com",
  messagingSenderId: "721669378658",
  appId: "1:721669378658:web:02cded20630a5a6377773b",
  measurementId: "G-NJ2R3SPC71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}
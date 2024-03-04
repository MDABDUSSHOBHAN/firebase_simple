// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import App from './../../App';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs88-w1CCETdFBw7P1UHWsJMQp9OrQFhk",
  authDomain: "simple-firbase-991e2.firebaseapp.com",
  projectId: "simple-firbase-991e2",
  storageBucket: "simple-firbase-991e2.appspot.com",
  messagingSenderId: "113168907363",
  appId: "1:113168907363:web:7cfb6b93ecd1cdc5f50c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3wq-P8OIptZ_v5ztAfYSqnW1yCiDKmeY",
  authDomain: "blink-bde6f.firebaseapp.com",
  projectId: "blink-bde6f",
  storageBucket: "blink-bde6f.appspot.com",
  messagingSenderId: "946338544182",
  appId: "1:946338544182:web:c2fb1e2cc3288c5eaeb697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
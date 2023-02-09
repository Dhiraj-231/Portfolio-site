
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3U1FPGAlawjwguQ85252l3Db2SQqFxB8",
  authDomain: "portfolio-app-af504.firebaseapp.com",
  projectId: "portfolio-app-af504",
  storageBucket: "portfolio-app-af504.appspot.com",
  messagingSenderId: "44901185700",
  appId: "1:44901185700:web:7892d7cfd6461953a4ce31",
  measurementId: "G-48Y00P0D3D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();

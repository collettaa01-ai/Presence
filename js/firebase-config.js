import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHewxUtsTPVUN3NKko4OFk5ixrbbHfLVQ",
  authDomain: "presence-839c0.firebaseapp.com",
  projectId: "presence-839c0",
  storageBucket: "presence-839c0.firebasestorage.app",
  messagingSenderId: "148232156089",
  appId: "1:148232156089:web:c849e4f05c24e556a37c68"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Cambia questo codice segreto e comunicalo solo al tuo capo
export const ADMIN_CODE = 'CAPO2024';

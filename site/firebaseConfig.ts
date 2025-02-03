import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOrh-Hb8rkDwyeodSoXJJP-iVsJTzK9v0",
  authDomain: "zenvix-sites.firebaseapp.com",
  projectId: "zenvix-sites",
  storageBucket: "zenvix-sites.firebasestorage.app",
  messagingSenderId: "720124196521",
  appId: "1:720124196521:web:b2f5caad5b3a3fd2b25bb8",
  measurementId: "G-KXSBNDP7S3"
};

// Inicializa o Firebase apenas se ainda não foi inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
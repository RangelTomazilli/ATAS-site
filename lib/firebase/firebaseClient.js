// Importe o SDK do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyCOrh-Hb8rkDwyeodSoXJJP-iVsJTzK9v0",
  authDomain: "zenvix-sites.firebaseapp.com",
  projectId: "zenvix-sites",
  storageBucket: "zenvix-sites.firebasestorage.app",
  messagingSenderId: "720124196521",
  appId: "1:720124196521:web:b2f5caad5b3a3fd2b25bb8",
  measurementId: "G-KXSBNDP7S3"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Exporte o Firestore para uso em outros módulos
export const db = getFirestore(app);


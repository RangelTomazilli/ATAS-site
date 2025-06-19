import app from './firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export async function updateVeiculosInFirebase(data: any) {
  const db = getFirestore(app);
  const docRef = doc(db, 'sites', 'atas-publicas');
  await setDoc(docRef, data, { merge: false }); // sobrescreve o documento inteiro
} 
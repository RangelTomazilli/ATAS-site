import app from './firebaseConfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export async function getVeiculosFromFirebase() {
  const db = getFirestore(app);
  const docRef = doc(db, 'sites', 'atas-publicas');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Dados do Firebase:', docSnap.data());
    return docSnap.data();
  } else {
    console.log('Documento não encontrado!');
    return null;
  }
} 
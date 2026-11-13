import app from "./firebaseConfig";
import { doc, getDocFromServer, getFirestore, setDoc } from "firebase/firestore";
import { CatalogoV2, isCatalogoV2 } from "@/app/lib/catalogoV2";

const COLLECTION = "sites";
const DOCUMENT_V2 = "atas-publicas-v2";

export async function getCatalogoV2(): Promise<CatalogoV2 | null> {
  const snapshot = await getDocFromServer(doc(getFirestore(app), COLLECTION, DOCUMENT_V2));
  if (!snapshot.exists()) return null;

  const data = snapshot.data();
  if (!isCatalogoV2(data)) {
    throw new Error("O documento V2 existe, mas não possui o schema esperado.");
  }

  return data;
}

export async function salvarCatalogoV2(data: CatalogoV2) {
  if (!isCatalogoV2(data)) throw new Error("Catálogo V2 inválido.");
  await setDoc(doc(getFirestore(app), COLLECTION, DOCUMENT_V2), data, { merge: false });
}

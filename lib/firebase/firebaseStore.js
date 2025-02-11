import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebaseClient';

// Função para buscar todos os documentos de uma coleção
export const fetchCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};

// Função para adicionar um novo documento
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};

// Função para atualizar um documento existente
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error('Erro ao atualizar documento:', error);
    throw error;
  }
};

// Função para deletar um documento
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Erro ao deletar documento:', error);
    throw error;
  }
};

export const fetchAtasPublicasData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'atas-publicas'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};
}
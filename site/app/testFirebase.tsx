'use client';
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore'; // Correta importação para buscar um documento específico

interface Vehicle {
  id: string;
  [key: string]: any; // Permite propriedades dinâmicas
}

const TestFirebase = () => {
  const [data, setData] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Buscando documento de atas-publicas...");
        const docRef = doc(db, "sites", "atas-publicas"); // Caminho correto para acessar os dados
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Documento encontrado:", docSnap.data());

          // Pegando apenas os dados do campo "7-lugares"
          const vehiclesData = docSnap.data()["7-lugares"] || []; 

          console.log("Dados extraídos:", vehiclesData);
          setData(vehiclesData);
        } else {
          console.log("Nenhum documento encontrado!");
        }

        setLoading(false);
      } catch (e: any) {
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando dados do Firebase...</p>;
  }

  if (error) {
    return <p>Erro ao carregar dados do Firebase: {error instanceof Error ? error.message : 'Erro desconhecido'}</p>;
  }

  return (
    <div>
      <h1>Dados do Firebase:</h1>
      <ul>
        {data.map((item: Vehicle, index) => (
          <li key={index}>
            <strong>Nome:</strong> {item.nome} <br />
            <strong>Descrição:</strong> {item.descricao} <br />
            <strong>Valor:</strong> {item.valor} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestFirebase;

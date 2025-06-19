'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getVeiculosFromFirebase } from "@/app/components/Services/firebaseGetVeiculos";

interface Veiculo {
  nome: string;
  valor: string;
  descricao: string;
}

export default function Page () {
  const params = useParams();
  const tipo = params?.tipo as string;
  const [veiculosData, setVeiculosData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVeiculosFromFirebase().then((data) => {
      setVeiculosData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <span className="text-xl text-blue-600">Carregando veículos...</span>
      </div>
    );
  }

  // Verificação de segurança
  if (!tipo || !veiculosData || !(tipo in veiculosData)) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Veículo não encontrado
          </h1>
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  const veiculos = veiculosData[tipo] as Veiculo[];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 capitalize text-center">
          {tipo}
        </h1>
        <div className="space-y-8">
          {veiculos.map((veiculo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-8">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
                  <h2 className="text-2xl font-semibold text-blue-600">
                    {veiculo.nome}
                  </h2>
                  <span className="text-xl font-bold text-green-600">
                    {veiculo.valor}
                  </span>
                </div>
                <div className="text-gray-700 space-y-4"><p>{veiculo.descricao}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-8 left-8">
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
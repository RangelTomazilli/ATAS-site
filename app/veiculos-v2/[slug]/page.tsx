"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCatalogoV2 } from "@/app/components/Services/firebaseCatalogoV2";
import { CategoriaV2 } from "@/app/lib/catalogoV2";

export default function VeiculosV2Page() {
  const { slug } = useParams<{ slug: string }>();
  const [categoria, setCategoria] = useState<CategoriaV2 | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCatalogoV2()
      .then((data) => setCategoria(data?.categorias.find((item) => item.slug === slug) ?? null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="min-h-screen py-16 text-center text-blue-600">Carregando veículos...</p>;
  if (!categoria) {
    return (
      <div className="min-h-screen py-16 text-center">
        <h1 className="mb-6 text-2xl font-bold text-red-600">Categoria não encontrada</h1>
        <Link href="/v2" className="rounded bg-blue-600 px-5 py-3 text-white">Voltar ao catálogo V2</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">{categoria.nome}</h1>
      <div className="container mx-auto space-y-8">
        {!categoria.veiculos.length && (
          <p className="rounded-lg bg-white p-8 text-center text-gray-600 shadow">
            Ainda não há veículos cadastrados nesta categoria.
          </p>
        )}
        {categoria.veiculos.map((veiculo) => (
          <article key={veiculo.id} className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between border-b pb-4">
              <h2 className="text-2xl font-semibold text-blue-600">{veiculo.nome}</h2>
              <strong className="text-xl text-green-600">{veiculo.valor}</strong>
            </div>
            <p className="whitespace-pre-line text-gray-700">{veiculo.descricao}</p>
          </article>
        ))}
        <Link href="/v2" className="inline-block rounded bg-blue-600 px-5 py-3 text-white">Voltar ao catálogo V2</Link>
      </div>
    </main>
  );
}

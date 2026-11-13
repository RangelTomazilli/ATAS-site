"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCatalogoV2 } from "@/app/components/Services/firebaseCatalogoV2";
import { CategoriaV2 } from "@/app/lib/catalogoV2";

export default function CatalogoV2Home() {
  const pathname = usePathname();
  const basePath = pathname === "/v2" ? "/veiculos-v2" : "/veiculos";
  const [categorias, setCategorias] = useState<CategoriaV2[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCatalogoV2()
      .then((data) => {
        const visiveis = (data?.categorias ?? [])
          .sort((a, b) => a.ordem - b.ordem);
        setCategorias(visiveis);
      })
      .catch(() => setError("Não foi possível carregar o catálogo de testes."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="py-16 text-center text-blue-700">Carregando catálogo...</p>;
  if (error) return <p className="py-16 text-center text-red-600">{error}</p>;
  if (!categorias.length) {
    return <p className="py-16 text-center text-gray-600">Nenhuma categoria cadastrada no V2.</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-6 px-10 pb-8 sm:grid-cols-2 lg:grid-cols-5 lg:px-40">
      {categorias.map((categoria) => (
        <Link
          key={categoria.id}
          href={`${basePath}/${categoria.slug}`}
          className="relative h-[250px] overflow-hidden rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
        >
          <Image src={categoria.imagem} alt={categoria.nome} fill className="object-contain" />
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(31,80,129,0.5)] p-4 text-white">
            <h2 className="text-center text-2xl font-bold">{categoria.nome}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
}

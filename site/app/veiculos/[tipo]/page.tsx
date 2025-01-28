'use client';
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page () {
  const params = useParams();
  const tipo = params?.tipo as string;
  const veiculosData = {
    hatch: [
      {
        nome: "HB20",
        valor: "R$ 100,00",
        descricao: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </>
        ),
      },
      {
        nome: "Argo",
        valor: "R$ 120,00",
        descricao: (
          <>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="mt-4">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="mt-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </>
        ),
      },
    ],
    sedan: [
      {
        nome: "Civic",
        valor: "R$ 150,00",
        descricao: (
          <>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
            <p className="mt-4">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <p className="mt-4">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
            </p>
          </>
        ),
      },
      {
        nome: "Corolla",
        valor: "R$ 160,00",
        descricao: (
          <>
            <p>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
            </p>
            <p className="mt-4">
              Blinded by desire, they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.
            </p>
            <p className="mt-4">
              Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
            </p>
          </>
        ),
      },
    ],
    suv: [
      {
        nome: "Compass",
        valor: "R$ 180,00",
        descricao: (
          <>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <p className="mt-4">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <p className="mt-4">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </>
        ),
      },
      {
        nome: "Creta",
        valor: "R$ 170,00",
        descricao: (
          <>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="mt-4">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="mt-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>
          </>
        ),
      },
    ],
    "pick-up": [
      {
        nome: "Hilux",
        valor: "R$ 200,00",
        descricao: (
          <>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="mt-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="mt-4">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
            </p>
          </>
        ),
      },
      {
        nome: "Ranger",
        valor: "R$ 210,00",
        descricao: (
          <>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-4">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <p className="mt-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </>
        ),
      },
    ],
    // Continue adicionando outros tipos como "7 Lugares", "Ambulâncias", "Vans", "Ônibus", "Caminhões" e "Tratores"
  };
  
  // Verificação de segurança
  if (!tipo || !(tipo in veiculosData)) {
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

  const veiculos = veiculosData[tipo as keyof typeof veiculosData];

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
                <div className="text-gray-700 space-y-4">{veiculo.descricao}</div>
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
};
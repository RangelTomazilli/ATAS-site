import React from "react";

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Título da página */}
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Quem Somos
        </h1>

        {/* Conteúdo */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          {/* Parágrafo 1 */}
          <p className="text-lg leading-relaxed">
            Bem-vindo à <strong>Atas Públicas MG</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Somos especializados na intermediação de vendas de atas de registro
            de preço para órgãos públicos. Com uma equipe dedicada e
            experiente, nosso objetivo é facilitar o processo de aquisição de
            bens por Órgãos Públicos, garantindo que tenham acesso às
            melhores oportunidades do mercado.
          </p>

          {/* Parágrafo 2 */}
          <p className="text-lg leading-relaxed">
            Nosso compromisso é com a <strong>transparência</strong>,{" "}
            <strong>eficiência</strong>, <strong>impessoalidade</strong> e,
            principalmente, com a <strong>legalidade</strong>. Trabalhamos em
            estreita colaboração com fornecedores e órgãos públicos, sempre
            buscando soluções que atendam às necessidades da Administração
            Pública.
          </p>

          {/* Parágrafo 3 */}
          <p className="text-lg leading-relaxed">
            Acreditamos que a intermediação eficaz é fundamental para o sucesso
            das operações públicas. Por isso, estamos sempre atualizados de
            forma a oferecer um serviço de qualidade e confiança.
          </p>
        </div>
      </div>
    </div>
  );
}

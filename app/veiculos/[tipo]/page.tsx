'use client';
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page () {
  const params = useParams();
  const tipo = params?.tipo as string;
  const veiculosData = {
    "hatch": [
      {
        nome: "CITROEN C3 LIVE",
        valor: "R$ 77.900,00",
        descricao: (
          <>
            <p>
              {`Veículo automotor, hatch, capacidade de 05 lugares (sendo 4 passageiros e 1 motorista), ano/modelo 2024/2024 ou superior, cor branca, com motor flex (gasolina/etanol) com potência mínima de 70 cv, ar-condicionado, direção elétrica ou hidráulica, trava elétrica nas portas, vidros elétricos nas portas dianteiras, para-choques pintados na cor do veículo, porta-malas de no mínimo 300 litros e com todos os itens de segurança de acordo com o Código de Trânsito Brasileiro e exigidos pelo Denatran.`}
            </p>
          </>
        ),
      },
      {
        nome: "FIAT MOBI LIKE 1.0 2025",
        valor: "R$ 80.000,00",
        descricao: (
          <>
            <p>
              {`VEICULO HATCH 1.0; Capacidade mininas; Cor metalica; motor 1.0; Cilindra 999,1; Potencia 66,00 cv; Porta malas: 200 litros; Entre eixo: 2.300; Tanque: 36 litros; Ar condicionado; Direção hidráulica ou elétrica ou eletro hidráulica.`}
            </p>
          </>
        ),
      },
      {
        nome: "VOLKSWAGEN POLO SENSE TSI",
        valor: "R$ 102.200,00",
        descricao: (
          <>
            <p>
              {`VEICULO HATCH/SUV - VEICULO DE PASSEIO - TRANSPORTE DE EQUIPE (5 PESSOAS, 0KM) 1.0 A 1.6 CAPACIDADE MÍNIMAS: Cor metalica motor 1.0 potencia minima 98,00 cv porta malas: 285 litros; distancia entre os eixos minima: 2.370; tanque: 40 litros - ar condicionado – trio elétrico, direção hidráulica ou elétrica ou eletro hidráulica; fabricado no maximo ha 6 meses, com todos os acessorios minimos obrigatorios, conforme legislacao em vigor.`}
            </p>
          </>
        ),
      },
    ],
    "suv": [
      {
        nome: "VOLKSWAGEN POLO SENSE TSI",
        valor: "R$ 102.200,00",
        descricao: (
          <>
            <p>
              {`Cilindrada total (cc) : 999, Potência (cv) : 125,0 (G) / 130,0 (E), Altura do veículo (mm) : 1500, Capacidade do porta-malas (litros) : 360, Comprimento do veículo (mm) : 4000, Entre-Eixos (mm) : 2500, Tanque de combustível (litros) : 46, Banco traseiro bipartido 60/40 e com assentos rebatíveis, *Roda de liga leve R16, Airbags (4) - Frontal (2), Tórax e Cabeça (2), .larme antifurto, Ar-condicionado digital, ASR (Controle eletrônico de tração), Banco do motorista com regulagem de altura Brake light, Câmbio automático CVT (7 velocidades, simuladas), Central multimídia com tela de 8,0" touchscreen, Apple Car Play e Android Auto wireless, Comandos de Voz, Bluetooth, MP3, Rádio AM/FM, Comandos de áudio e painel de instrumentos no volante, Computador de Bordo (distância, consumo médio, consumo instantâneo, autonomia, velocidade média e tempo de percurso), Desembaçador do vidro traseiro com temporizador, Direção elétrica, ESP (Controle Eletrônico de Estabilidade) ESS (Sinalização de frenagem de emergência), Hill holder (Assistente de partida em rampa), Retrovisores externos com regulagem elétrica, Sensor de estacionamento traseiro, Vidros elétricos dianteiros e traseiros com função antiesmagamento, Volante com regularem de altura.`}
            </p>
          </>
        ),
      },
    ],
    "pick-up": [
      {
        nome: "FIAT / TORO VOLCANO TURBODIESEL 4X4",
        valor: "R$ 212.000,00",
        descricao: (
          <>
            <p className="mt-4">
              {`VEICULO CAMINHONETE CABINE DUPLA DIESEL Capacidade mínimas Cor metalica Motor 2.0 no minimo Lugares: 5 Cilindra 1.900 Potencia 170,00 cv Motor: DIESEL Entre eixo: 2.900 Capacidade de carga: 900 kg Tanque: 55 litros Ar condicionado Direção hidráulica ou elétrica ou eletro hidráulica;`}           </p>
          </>
        ),
      },
      {
        nome: "VOLKSWAGEN NOVA AMAROK V6 COMFORTLINE",
        valor: "R$ 298,000,00",
        descricao: (
          <>
            <p className="mt-4">
              {`CAMINHONETE PICK UP CABINE DUPLA DIESEL 5 LUGARES, VEICULO NOVO 2025.`}
            </p>
          </>
        ),
      },
      {
        nome: "FIAT STRADA ULTRA CABINE DUPLA",
        valor: "R$ 137,800,00",
        descricao: (
          <>
            <p className="mt-4">
              {`CAMINHONETE PICK UP PEQUENA CAB DUPLA FLEX, VEICULO NOVO 2025`}
            </p>
          </>
        ),
      },
    ],
    "tratores": [
      {
        nome: "Bundny BDY 8540 SL Cabinado",
        valor: "R$ 213.000,00",
        descricao: (
          <>
            <p>
              {`TRATOR AGRÍCOLA DE PNEUS, com as seguintes características: NOVO, ano e modelo igual ou superior a 2024, ZERO KM, tração 4X4, com cabine fechada ROPS/FOPS original de fábrica, com acesso por um lado e com ar-condicionado, motor a diesel, turbo, 4 cilindros, padrão de emissões MAR I (Resolução CONAMA), potência igual a 85 CV, caixa de câmbio sincronizada com 12 velocidades à frente e 12 à ré, tomada de potência/força independente/eletrohidráulico, potência de levantamento hidráulico de 3.460 kg, pneus dianteiros 12.4-24” R1 e traseiros 18.4-30” R1, capacidade de tanque de 110 litros (com tanque auxiliar), tomada de força dupla, peso do trator de 3.600 kg, tomada de potência traseira 540 RPM, sistema hidráulico com capacidade de 51 litros/min, equipado com duas válvulas de controle remoto, freios hidráulicos com acionamento mecânico banhados a óleo, direção hidrostática, engate de três pontos, barra de tração e contrapesos de série, e equipado com todos os itens/acessórios de série, bem como os obrigatórios e exigidos pelo Código Nacional de Trânsito e INMETRO.`}
            </p>
          </>
        ),
      },
      {
        nome: "Bundny DBY 8540 SL Plataformado - 2024/2024",
        valor: "R$ 197.000,00",
        descricao: (
          <>
            <p>
              {`TRATOR AGRÍCOLA NOVO. ZERO HORA. Potência maior ou igual a 85 CV e menor que 99 CV. Plataformado. Tipo C. Especificações conforme folha de dados.`}
            </p>
          </>
        ),
      },
    ],
    "7-lugares": [
      {
        nome: "CITROEN / C3 AIRCROSS 7 FEEL TURBO",
        valor: "R$ 118.800,00",
        descricao: (
          <>
            <p>
              {`Veículo Minivan (7 lugares): Veiculo biocombustível, direção hidráulica ou elétrica, 04 portas, Cor metalica, câmbio manual ou automático, Distância entre eixos mínima de 2.500mm, Motorização mínima 1.0 Ar condicionado, Trio Elétrico. Complementação 0km, fabricado, no máximo, há 6 (Seis) meses, com todos os acessórios mínimos obrigatórios, conforme legislação em vigor. `}
            </p>
          </>
        ),
      },
    ],
    "sedan": [
      {
        nome: "VOLKSWAGEN VIRTUS SENSE TSI",
        valor: "R$ 102.800,00",
        descricao: (
          <>
            <p>
              {`VEICULO SEDAN 1.0 Turbo ou 1.3 Capacidade mínimas Cor metalica motor 1.0 turbo Cilindra 999,1; Potencia 98,00 cv Porta malas: 485 litros Entre eixo: 2.500 Tanque: 40 litros Ar condicionado Direção hidráulica ou elétrica ou eletro hidráulica;`}            </p>
          </>
        ),
      },
    ],
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
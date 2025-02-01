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
    ],
    "sedan": [],
    "suv": [
      {
        nome: "FIAT / FASTBACK TURBO",
        valor: "R$ 123.000,00",
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
        valor: "R$ 191.000,00",
        descricao: (
          <>
            <p>
            VEICULO CAMINHONETE CABINE DUPLA DIESEL ANO/MOD:2024
            </p>
            <p className="mt-4">
            {`VEICULO CAMINHONETE CABINE DUPLA DIESEL ANO/MOD:2024
            Combustível: Diesel, Cilindrada total (cc): 1.956, Potência mínima (cv): 160, Torque mínimo (kgf.m): 32,7 @ 1.750 rpm, Altura do veículo (mm): 1.600, Capacidade de carga (Kg): 1.000, Comprimento do veículo (mm) : 4.900, Entre-Eixos, mm): 2.900, Tanque de combustível (litros): 60, Banco do motorista elétrico, Bancos em Couro, âmbio automático de mínimo 7 velocidades, Tração (4x4 low), Rodas em liga leve 6.5 x 18 + pneus 225/60 R18, Sensor de estacionamento Frontal, Tração 4x4 com seletor, Espelho no para-sol lados motorista e passageiro, Abertura elétrica do bocal de abastecimento, Airbags (6) - laterais (2) cortina (2) Frontal (2), Alarme antifurto. Alça de segurança traseira com luz de leitura incorporada. Alto falantes dianteiros (2), Alto falantes traseiros (2) e Antena. Ar-condicionado digital. ASR (Controle de Tração). Banco do motorista com regulagem de altura. Barras longitudinais no teto, Brake light, Câmera de ré. Capota marítima. Central multimídia com tela de mínimo 7,0" touchscreen; Apple CarPlay wireless e Android Auto wireless; Comandos de voz Bluetooth, MP3, Rádio AM/FM, entrada aux, Porta USB, ESP (Controle Eletrônico de Estabilidade). Freios ABS com EBD. Ganchos para amarração de carga na caçamba, .Hill Holder (sistema ativo freio com controle eletrônico que auxilia nas arrancadas do veículo em subida). Retrovisores externos com comando elétrico, Sensor de estacionamento traseiro, Comandos de áudio no volante, Computador de bordo (distância, velocidade média e tempo de percurso). Desembaçador do vidro traseiro. Direção elétrica. Dois Tweeters. Travas elétricas (Travamento automático a 20 km/h, indicador de portas abertas, luz inter na com temporizador e tampa do combustível), Vidros elétricos dianteiros e traseiros antiesmagamento, Volante com regulagem de altura e profundidade.`}
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
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
        valor: "R$ 80.200,00",
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
        nome: "RENAULT KWID ZEN 1.0",
        valor: "R$ 74.000,00",
        descricao: (
          <>
            <p>
              {`VEÍCULO HATCH ANO/MOD: 2024
Configurações mínimas: Combustível: Flex, Cilindrada (cc): 999,1, Potência, (cv) : 68(G)/71(E), Torque: 9,3(G)/9,7(E), Altura do solo (mm): 175, Altura do veículo (mm): 1.400, Capacidade do porta-malas: (litros): 270, Comprimento do veículo (mm): 3.500, Distância entre-eixos : 2.300, Tanque de combustível (litros): 38, Ar condicionado, Banco traseiro rebatível, Cinto de segurança traseiro retrátil 3 pontos, Cintos de segurança dianteiros retráteis de 3 pontos,
.Computador de Bordo, Direção hidráulica, Sinalização de frenagem de emergência, Airbag duplo (motorista e passageiro) e Freios ABS, Retrovisores externos com comando interno mecânico, Rodas de aço estampado 5.5 x 14" com calotas integrais + Pneus 165/70 R14, Vidros elétricos dianteiros e anti-esmagamento) e travas elétricas nas 4 portas, Radio am/fm com entrada USB e
Bluetooth.`}
            </p>
          </>
        ),
      },
      {
        nome: "FIAT ARGO DRIVE 1.3 AUTOMÁTICO",
        valor: "R$ 99.500,00",
        descricao: (
          <>
            <p>
              {`VEICULO HATCH - ANO/MOD:2024 Combustível: Flex, Cilindrada total (cc): 1.300, Potência (cv): 95,0 (G) / 105,0 (E), Torque (kgf.m) : 12,2 (G) a 12,7(E), Altura do solo (mm) : 160, Capacidade do porta-malas: (litros) : 300, Comprimento do veículo (mm) : 3.900, Entre-Eixos (mm) : 2.500, Tanque de combustível (litros): 45, Hill Holder (sistema ativo freio com controle eletrônico que auxilia nas arrancadas do veículo em subida), Banco do motorista com regulagem de altura, Câmbio automático do tipo CVT (com mínimo 6, velocidades simuladas), *Central Multimídia minimo de 7", Touchscreen com Android Auto e Apple Car, Play, Bluetooth, entradas USB (2) e Sistema de reconhecimento de voz; Controle eletrônico de tração e estabilidade (TC + ESC), Iluminação do porta-luvas, Iluminação do porta-malas, Maçanetas e retrovisores externos na cor, do veículo, Rodas de aço estampado 6.0 x 15" com calotas integrais + Pneus 185/60 R15, Volante com comandos de rádio e telefone Alarme antifurto, Ar condicionado com filtro antipólen, Banco traseiro rebatível, .Brake Light e ESS (Sinalização de frenagem de emergência), .Chave canivete com telecomando para abertura das portas, vidros e porta-malas, Cintos de segurança dianteiros retráteis de 3 pontos sem regulagem de altura, .Cintos de segurança traseiros (laterais e central) retráteis de 3 pontos, .Computador de Bordo (distância, consumo médio, consumo instantâneo, autonomia, .Desembaçador do vidro traseiro, .Direção elétrica/hidráulica, Airbag duplo (motorista e passageiro) ABS com EBD, .Retrovisores externos com comando interno mecânico, Travas elétricas nas portas e porta malas (travamento automático a 20km/h, Vidros elétricos dianteiros com antiesmagamento, .Volante com regulagem de altura.`}
            </p>
          </>
        ),
      },
    ],
    "sedan": [
      {
        nome: "FIAT CRONOS DRIVE AUT 1.3 FLEX",
        valor: "R$ 110.000,00",
        descricao: (
          <>
            <p>
              {`VEÍCULO DE PASSEIO – (5 PESSOAS) – TIPO SEDAN – COM AS SEGUINTES ESPECIFICAÇÕES: BICOMBUSTÍVEL (ÁLCOOL E GASOLINA), DIREÇÃO: HIDRÁULICA, ELETRO-HIDRAÚLICA OU ELÉTRICA, 4 PORTAS, CÂMBIO AUTOMÁTICO, MOTORIZAÇÃO 1.0 A 1.5 OU 1.0 TURBO, MINIMO 105 CV DE POTÊNCIA, TRAÇÃO DIANTEIRA, VIDROS E TRAVAS ELÉTRICAS, AR-CONDICIONADO, TANQUE DE COMBUSTIVEL COM CAPACIDADE MINIMA DE 45 LITROS. COR: BRANCA OU PRATA, FRETE INCLUSO, 0KM, FABRICADO, NO MAXIMO, HÁ 6 (SEIS) MESES, ACESSÓRIOS MÍNIMOS OBRIGATÓRIOS PREVISTOS NA LEGISLAÇÃO VIGENTE, BEM COMO OS ACESSÓRIOS DE SÉRIE FORNECIDOS PELO FABRICANTE PARA A MARCA E MODELO OFERTADOS. TIPO CRONOS, VIRTUS, HB20s, YARIS OU SIMILAR.`}
            </p>
          </>
        ),
      },
    ],
    "suv": [
      {
        nome: "FIAT FASTBACK TURBO",
        valor: "R$ 123.000,00",
        descricao: (
          <>
            <p>
              {`VEICULO ZERO KM MODELO SUV ANO/MOD: 2024 Configurações mínimas: 
Cilindrada total (cc) : 999, Potência (cv) : 125,0 (G) / 130,0 (E), Altura do veículo (mm) : 1500, Capacidade do porta-malas (litros) : 360, Comprimento do veículo (mm) : 4000, Entre-Eixos (mm) : 2500, Tanque de combustível (litros) : 46, Banco traseiro bipartido 60/40 e com assentos rebatíveis, *Roda de liga leve R16, Airbags (4) - Frontal (2), Tórax e Cabeça (2), .larme antifurto, Ar-condicionado digital, ASR (Controle eletrônico de tração), Banco do motorista com regulagem de altura Brake light, Câmbio automático CVT (7 velocidades, simuladas), Central multimídia com tela de 8,0" touchscreen, Apple Car Play e Android Auto wireless, Comandos de Voz, Bluetooth, MP3, Rádio AM/FM, Comandos de áudio e painel de instrumentos no volante, Computador de Bordo (distância, consumo médio, consumo instantâneo, autonomia, velocidade média e tempo de percurso), Desembaçador do vidro traseiro com temporizador, Direção elétrica, ESP (Controle Eletrônico de Estabilidade) ESS (Sinalização de frenagem de emergência), Hill holder (Assistente de partida em rampa), Retrovisores externos com regulagem elétrica, Sensor de estacionamento traseiro, Vidros elétricos dianteiros e traseiros com função antiesmagamento, Volante com regularem de altura. `}
            </p>
          </>
        ),
      },
      {
        nome: "RENAULT KARDIAN/EVOLUTION",
        valor: "R$ 101.000,00",
        descricao: (
          <>
            <p>
              {`SUV COMPACTO - VEÍCULO HATCH 05 LUGARES`}
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
      {
        nome: "FIAT STRADA FREEDON CABINE DUPLA",
        valor: "R$ 120.900,00",
        descricao: (
          <>
            <p className="mt-4">
              {`VEÍCULO ULITÁRIO LEVE - TIPO PICK-UP, – CABINE DUPLA COM 5 (CINCO) LUGARES, COM AS SEGUINTES ESPECIFICAÇÕES: BICOMBUSTÍVEL (ÁLCOOL E GASOLINA), DIREÇÃO: HIDRÁULICA, ELETRO-HIDRAÚLICA OU ELÉTRICA, 4 PORTAS, CÂMBIO MANUAL OU AUTOMÁTICO, MOTORIZAÇÃO MÍNIMA DE 1.3, MINIMO 107 CV DE POTÊNCIA, TRAÇÃO DIANTEIRA, CAÇAMBA COM CARGA ÚTIL DE NO MÍNIMO 605 KG E VOLUME INTERNO MÍNIMO DE 580 LITROS, COR: BRANCA OU PRATA, FRETE INCLUSO, 0KM, FABRICADO, NO MAXIMO, HÁ 6 (SEIS) MESES, ACESSÓRIOS MÍNIMOS OBRIGATÓRIOS PREVISTOS NA LEGISLAÇÃO VIGENTE, BEM COMO OS ACESSÓRIOS DE SÉRIE FORNECIDOS PELO FABRICANTE PARA A MARCA E MODELO OFERTADOS. TIPO STRADA, SAVEIRO OU SIMILAR.`}
            </p>
          </>
        ),
      },
    ],
    "trator": [
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
    "van": [
      {
        nome: "RENAULT MASTER",
        valor: "R$ 285.000,00",
        descricao: (
          <>
            <p>
              {`TRAÇÃO DIANTEIRA OU TRASEIRA, COMBUSTÍVEL DIESEL, DIREÇÃO ELÉTRICA, HIDRAÚLICA OU ELETRO-HIDRÁULICA, 0KM, FABRICADO, NO MAXIMO, HÁ 6 (SEIS) MESES, ACESSÓRIOS MÍNIMOS OBRIGATÓRIOS PREVISTOS NA LEGISLAÇÃO VIGENTE, BEM COMO OS ACESSÓRIOS DE SÉRIE FORNECIDOS PELO FABRICANTE PARA A MARCA E MODELO OFERTADOS; COR BRANCA OU PRATA – TIPO FORD TRANSIT, RENALUT MASTER, MERCEDES, SPRINTER OU SIMILAR.`}
            </p>
          </>
        ),
      },
      {
        nome: "RENAULT MASTER",
        valor: "R$ 297.000,00",
        descricao: (
          <>
            <p>
              {`CAPACIDADE DE TRANSPORTE 15 PESSOAS E 1 MOTORISTA, MOTORIZAÇÃO DIESEL MÍNIMO DE 2.0 MÍNIMO 140 CV DE POTÊNCIA, TRAÇÃO DIANTEIRA OU TRASEIRA, COMBUSTÍVEL DIESEL, DIREÇÃO ELÉTRICA, HIDRAÚLICA OU ELETRO-HIDRÁULICA, 0KM, FABRICADO, NO MAXIMO, HÁ 6 (SEIS) MESES, ACESSÓRIOS MÍNIMOS OBRIGATÓRIOS PREVISTOS NA LEGISLAÇÃO VIGENTE, BEM COMO OS ACESSÓRIOS DE SÉRIE FORNECIDOS PELO FABRICANTE PARA A MARCA E MODELO OFERTADOS - TIPO FORD TRANSIT, RENAULT MASTER, MERCEDES SPRINTER - DESCRITIVO TÉCNICO DA TRANSFORMAÇÃO: O VEÍCULO DEVERÁ POSSUIR EQUIPAMENTO ELEVADOR DE ACESSIBILIDADE E INCLUSIVIDADE PARA CADEIRANTE DO TIPO POLTRONA MÓVEL (DPM), COM CAPACIDADE MÍNIMA DE 130KG, SISTEMA ELÉTRICO E ACIONAMENTO AUTOMÁTICO POR CONTROLE REMOTO, INSTALAÇÃO EM FRENTE A PORTA LATERAL DIREITA CORREDIÇA, ELEVAÇÃO DE BANCO COM SISTEMA AUTOMÁTICO E ELÉTRICO, ACIONAMENTO MANUAL DE EMERGÊNCIA, COMPATÍVEL PARA INSTALAÇÃO NA POLTRONA ORIGINAL DO VEÍCULO SOBRE MECANISMO MÓVEL; O EQUIPAMENTO DEVERÁ POSSUIR OBRIGATORIAMENTE CERTIFICAÇÃO DE QUALIDADE EMITIDA PELO INMETRO EM CONFORMIDADE COM AS NORMAS VIGENTES DA ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS-ABNT.`}
            </p>
          </>
        ),
      },
    ],
    "ambulancia": [
      {
        nome: "RENAULT MASTER",
        valor: "R$ 278.000,00",
        descricao: (
          <>
            <p>
              {`AMBULÂNCIA TIPO B - SUPORTE BÁSICO - TIPO FURGÃO – COM AS SEGUINTES ESPECIFICAÇÕES: VEÍCULO FURGÃO ORIGINAL DE FÁBRICA, • 0 KM, FABRICADO, NO MAXIMO, HÁ 6 (SEIS) MESES, • COM TODOS OS ACESSORIOS MINIMOS OBRIGATORIOS, CONFORME LEGISLACAO EM VIGOR, • TIPO AMBULÂNCIA, • COR BRANCA, • MOTOR 4 TEMPOS A DIESEL; • TRAÇÃO DIANTEIRA OU TRASEIRA; POTÊNCIA MÍNIMA DE 130CV; MÍNIMO DE 6 MARCHAS À FRENTE + 1 MARCHA À RÉ; FREIOS ABS; RODAS E PNEUS 16"; • SUSPENSÃO DIANTEIRA TIPO MACPHERSON E TRASEIRA EM EIXO RÍGIDO COM TRAVESSAS LONGITUDINAIS E AMORTECEDORES HIDRÁULICOS TELESCÓPICOS; • PORTA LATERAL DESLIZANTE, PORTAS TRASEIRAS COM DUAS FOLHAS COM ABERTURA DE 180º; • AR-CONDICIONADO; • AIRBAG DUPLO; • TRAVA ELÉTRICA; • VOLANTE COM REGULAGEM DE ALTURA; • MACA RETRÁTIL TIPO ARANHA, COM NO MÍNIMO 1.900 MM DE COMPRIMENTO, COM CABECEIRA VOLTADA PARA FRENTE; DEVENDO POSSUIR DOIS GANCHOS CADA PARA FRASCOS DE SORO; ARMÁRIO. SINALIZADOR ÓTICO E ACÚSTICO; INSTALAÇÃO DE REDE DE OXIGÊNIO COM CILINDRO, VÁLVULA, MANÔMETRO EM LOCAL DE FÁCIL VISUALIZAÇÃO E RÉGUA COM DUPLA SAÍDA (A PRIMEIRA PORTANDO FLUXÔMETRO E UMIDIFICADOR DE OXIGÊNIO E A SEGUNDA PORTANDO ASPIRADOR TIPO VENTURI); MALETA DE EMERGÊNCIA CONTENDO: ESTETOSCÓPIO ADULTO E INFANTIL, RESSUSCITADOR MANUAL ADULTO/INFANTIL, CÂNULAS OROFARÍNGEAS DE TAMANHOS VARIADOS, PARES DE LUVAS DESCARTÁVEIS, TESOURA RETA COM PONTA ROMBA, ROLO DE ESPARADRAPO, ESFIGMOMANÔMETRO ANERÓIDE ADULTO/INFANTIL, ROLOS DE ATADURAS DE 15 CM, COMPRESSAS CIRÚRGICAS ESTÉREIS, PACOTES DE GAZE ESTÉRIL, CATETERES PARA OXIGENAÇÃO E ASPIRAÇÃO DE VÁRIOS TAMANHOS, TALAS PARA IMOBILIZAÇÃO E CONJUNTO DE COLAR CERVICAL); KIT DE PARTO (CONTENDO: LUVAS CIRÚRGICAS, CLAMPS UMBILICAIS, ESTILETE ESTÉRIL PARA CORTE DO CORDÃO, SACO PLÁSTICOPARA PLACENTA, ABSORVENTE HIGIÊNICO GRANDE, COBERTOR OU SIMILAR PARA ENVOLVER RECÉM-NASCIDO, COMPRESSAS CIRÚRGICAS ESTÉREIS, PACOTES DE GAZE ESTÉRIL E UM BRACELETE DE IDENTIFICAÇÃO); RÁDIOCOMUNICAÇÃO. GARANTIA MÍNIMA DE 12 MESES.`}
            </p>
          </>
        ),
      },
      {
        nome: "RENAULT MASTER",
        valor: "R$ 285.000,00",
        descricao: (
          <>
            <p>
              {`AMBULÂNCIA TIPO C – RESGATE – TIPO FURGÃO, COM AS SEGUINTES DESCRIÇÕES: • VEÍCULO FURGÃO ORIGINAL DE FÁBRICA, • 0 KM, FABRICADO, NO MAXIMO, HÁ 6 (SEIS) MESES, • COM TODOS OS ACESSORIOS MINIMOS OBRIGATORIOS, CONFORME LEGISLACAO EM VIGOR, • AMBULÂNCIA FURGÃO SUPERIOR DE 10,5 M3 INTERNO, POTÊNCIA MÍNIMA 129CV, DIREÇÃO HIDRÁULICA, • AR-CONDICIONADO, • DIANTEIR ORIGINAL DE FÁBRICA, • RODAS AÇO 6,5, PNEUS 225/65 R16, • TANQUE DE COMBUSTÍVEL MÍNIMO DE 70L, CARGA ÚTIL MÍNIMO 1.530, • GARANTIA DE UM ANO OU 100 MIL KM, • MEDIDAS EXTERNAS: COMPRIMENTO SUPERIOR A 5.540, ALTURA SUPERIOR A 2.490, MEDIDAS INTERNAS SALÃO AMBULÂNCIA COMPRIMENTO SUPERIOR A 3.080, ALTURA SUPERIOR A 1.890. DESCRITIVO TRANSFORMAÇÃO: • ISOLAMENTO TERMO – ACÚSTICO SEM EMENDAS PARA TOTAL ASSEPSIA, CONFORME ABNT NBR 14.561/2000; • REVESTIMENTO INTERNO NAS LATERAIS E TETO EM (PRFV) FIBRA DE VIDRO, CONFORME ABNT NBR 14.561/2000; • PISO ANTIDERRAPANTE, CONFORME ABNT NBR 14.561/2000; • ARMÁRIO SUPERIOR COM PORTAS DESLIZANTE EM ACRÍLICO CONFECCIONADO EM COMPENSADO NAVAL DE COR CLARA, CONFORME ABNT NBR 14.561/2000; • BALCÃO COM BANCADA PARA MEDICAMENTOS, LOCAL PARA GUARDA E FIXAÇÃO DE PRANCHA, • PORTAS DESLIZANTES EM ACRÍLICO, LOCAL PARA ARMAZENAMENTO DE BATERIA E BANCADA PARA MEDICAMENTO, CONFECCIONADA EM COMPENSADO NAVAL DE COR CLARA, CONFORME ABNT NBR 14.561/2000; • ARMÁRIO PARA ACONDICIONAMENTO DE CILINDROS DE OXIGÊNIO 16 LITROS, CONFECCIONADA EM COMPENSADO NAVAL DE COR CLARA, CONFORME ABNT NBR 14.561/2000; • BANCO LATERAL PARA 03 PESSOAS COM CINTOS DE SEGURANÇA INDIVIDUAL, ESTOFAMENTOS EM COURVIN DE ALTA RESISTÊNCIA, COM ENCOSTO DE CABEÇA, ASSENTOS E ENCOSTOS DAS COSTA INDIVIDUAL E LOCAL PARA LIXEIRA DESCARTÁVEL; BANCO DO ASSISTENTE REVESTIDO EM COURVIN DE ALTA RESISTÊNCIA COM POLTRONA ANATÔMICA GIRATÓRIA, COM CINTOS DE SEGURANÇA NÃO RETRÁTEIS E ENCOSTO DE CABEÇA. • MACA RETRÁTIL DE ALUMÍNIO COM COLCHONETE E CINTOS DE SEGURANÇA; ILUMINAÇÃO INTERNA COM 04 EM LEDS; MARCADOR.`}
            </p>
          </>
        ),
      },
      {
        nome: "RENAULT MASTER",
        valor: "R$ 253.900,00",
        descricao: (
          <>
            <p>
              {`AMBULÂNCIA TIPO A -- SIMPLES REMOÇÃO - TIPO FURGÃO. COM AS SEGUINTES ESPECIFICAÇÕES: AMBULÂNCIA TIPO A SIMPLES REMOÇÃO FURGÃO - VEÍCULO FURGÃO ORIGINAL DE FÁBRICA, 0 KM, FABRICADO, NO MAXIMO, HÁ 6 (SEIS) MESES, TODOS OS ACESSORIOS MINIMOS OBRIGATORIOS, CONFORME LEGISLACAO EM VIGOR, ADAPTADO PARA AMBULÂNCIA SIMPLES REMOÇÃO, COM CAPACIDADE VOLUMÉTRICA NÃO INFERIOR A 7 METROS CÚBICOS NO TOTAL. COMPRIMENTO TOTAL MÍNIMO. 4.740 MM; COMPRIMENTO MÍNIMO DO SALÃO DE ATENDIMENTO 2.500 MM; ALTURA INTERNA MÍNIMA DO SALÃO DE ATENDIMENTO: 1.540 MM; COMBUSTÍVEL: DIESEL; COR: BRANCA. ACESSÓRIOS MÍNIMOS OBRIGATÓRIOS PREVISTOS NA LEGISLAÇÃO VIGENTE, BEM COMO OS ACESSÓRIOS DE SÉRIE FORNECIDOS PELO FABRICANTE PARA A MARCA E MODELO OFERTADOS ESPECIFICAÇÃO DA TRANSFORMAÇÃO: A ESTRUTURA DA CABINE E DA CARROCERIA SERÁ ORIGINAL, CONSTRUÍDA EM AÇO. O PAINEL ELÉTRICO INTERNO, DEVERÁ POSSUIR 2 TOMADAS PARA 12V (DC). AS TOMADAS ELÉTRICAS DEVERÃO MANTER UMA DISTÂNCIA MÍNIMA DE 31 CM DE QUALQUER TOMADA DE OXIGÊNIO. A ILUMINAÇÃO DO COMPARTIMENTO DE ATENDIMENTO DEVE SER DE 2 TIPOS: NATURAL E ARTIFICIAL, DEVERÁ SER FEITA POR NO MÍNIMO 4 LUMINÁRIAS, INSTALADAS NO TETO, COM DIÂMETRO MÍNIMO DE 150 MM, EM BASE ESTAMPADA EM ALUMÍNIO OU INJETADA EM PLÁSTICO EM MODELO LED. A ILUMINAÇÃO EXTERNA DEVERÁ CONTAR COM HOLOFOTE TIPO FAROL ARTICULADO REGULADO MANUALMENTE NA PARTE TRASEIRA DA CARROCERIA, COM ACIONAMENTO INDEPENDENTE E FOCO DIRECIONAL AJUSTÁVEL 180º NA VERTICAL. POSSUIR 1 SINALIZADOR PRINCIPAL DO TIPO BARRA LINEAR OU EM FORMATO DE ARCO OU SIMILAR, COM MÓDULO ÚNICO; 2 SINALIZADORES NA PARTE TRASEIRA DA AMBULÂNCIA NA COR VERMELHA, COM FREQUÊNCIA MÍNIMA DE 90 FLASHES POR MINUTO, QUANDO ACIONADO COM LENTE INJETADA DE POLICARBONATO. PODENDO UTILIZAR UM DOS CONCEITOS DE LED. SINALIZADOR ACÚSTICO COM AMPLIFICADOR DE POTÊNCIA MÍNIMA DE 100 W RMS @13,8 VCC, MÍNIMO DE 3 TONS DISTINTOS, SISTEMA DE MEGAFONE COM AJUSTE DE GANHO E PRESSÃO SONORA A 1M DE NO MÍNIMO. 100 DB @13,8 VCC; SISTEMA DE RADIOCOMUNICAÇÃO.`}
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
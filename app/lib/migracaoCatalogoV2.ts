import { CategoriaV2, CatalogoV2, criarSlug, VeiculoV2 } from "./catalogoV2";

interface VeiculoLegado {
  nome?: unknown;
  valor?: unknown;
  descricao?: unknown;
}

interface ConfiguracaoCategoria {
  nome: string;
  slug: string;
  imagem: string;
  ordem: number;
}

const CONFIGURACOES: Record<string, ConfiguracaoCategoria> = {
  hatch: { nome: "Hatch", slug: "hatch", imagem: "/cards-images/hatch.png", ordem: 1 },
  sedan: { nome: "Sedan", slug: "sedan", imagem: "/cards-images/sedan.png", ordem: 2 },
  suv: { nome: "SUV", slug: "suv", imagem: "/cards-images/SUV.png", ordem: 3 },
  "pick-up": { nome: "Pick-up", slug: "pick-up", imagem: "/cards-images/pick-up.png", ordem: 4 },
  "7-lugares": { nome: "7 Lugares", slug: "7-lugares", imagem: "/cards-images/7lugares.png", ordem: 5 },
  ambulancia: { nome: "Ambulâncias", slug: "ambulancia", imagem: "/cards-images/ambulancia.png", ordem: 6 },
  van: { nome: "Vans", slug: "van", imagem: "/cards-images/van.png", ordem: 7 },
  onibus: { nome: "Ônibus", slug: "onibus", imagem: "/cards-images/bus.png", ordem: 8 },
  caminhao: { nome: "Caminhões", slug: "caminhao", imagem: "/cards-images/caminhao.png", ordem: 9 },
  trator: { nome: "Tratores", slug: "trator", imagem: "/cards-images/trator.png", ordem: 10 },
  tratores: { nome: "Tratores", slug: "trator", imagem: "/cards-images/trator.png", ordem: 10 },
};
const CHAVES_CANONICAS = ["hatch", "sedan", "suv", "pick-up", "7-lugares", "ambulancia", "van", "onibus", "caminhao", "trator"];

export interface ResumoMigracaoV2 {
  chaveOriginal: string;
  categoria: CategoriaV2;
  avisos: string[];
}

function texto(valor: unknown) {
  return typeof valor === "string" ? valor : "";
}

function nomeAmigavel(chave: string) {
  return chave
    .split("-")
    .filter(Boolean)
    .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
    .join(" ");
}

export function prepararMigracaoV2(data: Record<string, unknown>): {
  catalogo: CatalogoV2;
  resumo: ResumoMigracaoV2[];
} {
  const resumo = Object.entries(data).map(([chaveOriginal, valor], indice) => {
    const configuracao = CONFIGURACOES[chaveOriginal] ?? {
      nome: nomeAmigavel(chaveOriginal),
      slug: criarSlug(chaveOriginal),
      imagem: "/cards-images/hatch.png",
      ordem: 100 + indice,
    };
    const avisos: string[] = [];
    const itens = Array.isArray(valor) ? valor : [];

    if (!Array.isArray(valor)) avisos.push("O campo original não é um array.");
    if (!CONFIGURACOES[chaveOriginal]) avisos.push("Categoria desconhecida; revise nome, imagem e ordem.");
    if (chaveOriginal === "tratores") avisos.push("Chave antiga “tratores” será normalizada para o slug “trator”.");

    const veiculos: VeiculoV2[] = itens.map((item, itemIndex) => {
      const legado = item && typeof item === "object" ? item as VeiculoLegado : {};
      if (!texto(legado.nome) || !texto(legado.valor) || !texto(legado.descricao)) {
        avisos.push(`Veículo ${itemIndex + 1} possui campo vazio ou inválido.`);
      }
      return {
        id: `${configuracao.slug}-${itemIndex + 1}`,
        nome: texto(legado.nome),
        valor: texto(legado.valor),
        descricao: texto(legado.descricao),
      };
    });

    return {
      chaveOriginal,
      avisos: [...new Set(avisos)],
      categoria: {
        id: `categoria-${configuracao.slug}`,
        ...configuracao,
        veiculos,
      },
    };
  }).sort((a, b) => a.categoria.ordem - b.categoria.ordem);

  for (const chave of CHAVES_CANONICAS) {
    const configuracao = CONFIGURACOES[chave];
    if (!resumo.some((item) => item.categoria.slug === configuracao.slug)) {
      resumo.push({
        chaveOriginal: "—",
        avisos: ["Categoria não existe no documento antigo e será criada sem veículos."],
        categoria: {
          id: `categoria-${configuracao.slug}`,
          ...configuracao,
          veiculos: [],
        },
      });
    }
  }

  resumo.sort((a, b) => a.categoria.ordem - b.categoria.ordem);
  const slugs = resumo.map((item) => item.categoria.slug);
  resumo.forEach((item) => {
    if (slugs.filter((slug) => slug === item.categoria.slug).length > 1) {
      item.avisos.push("Outra chave original resulta no mesmo slug; revise antes de importar.");
    }
  });

  return {
    catalogo: { schemaVersion: 2, categorias: resumo.map((item) => item.categoria) },
    resumo,
  };
}

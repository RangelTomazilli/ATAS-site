export interface VeiculoV2 {
  id: string;
  nome: string;
  valor: string;
  descricao: string;
}

export interface CategoriaV2 {
  id: string;
  nome: string;
  slug: string;
  imagem: string;
  ordem: number;
  veiculos: VeiculoV2[];
}

export interface CatalogoV2 {
  schemaVersion: 2;
  categorias: CategoriaV2[];
}

export const CARD_IMAGES = [
  "/cards-images/7lugares.png",
  "/cards-images/SUV.png",
  "/cards-images/ambulancia.png",
  "/cards-images/bus.png",
  "/cards-images/caminhao.png",
  "/cards-images/hatch.png",
  "/cards-images/pick-up.png",
  "/cards-images/sedan.png",
  "/cards-images/trator.png",
  "/cards-images/van.png",
] as const;

export function criarId() {
  return crypto.randomUUID();
}

export function criarSlug(valor: string) {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isCatalogoV2(data: unknown): data is CatalogoV2 {
  if (!data || typeof data !== "object") return false;
  const value = data as Partial<CatalogoV2>;
  return value.schemaVersion === 2 && Array.isArray(value.categorias);
}

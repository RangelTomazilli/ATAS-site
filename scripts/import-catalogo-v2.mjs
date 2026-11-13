import { createHash } from "node:crypto";
import nextEnv from "@next/env";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const SOURCE_DOCUMENT = "atas-publicas";
const TARGET_DOCUMENT = "atas-publicas-v2";
const CONFIRMATION_FLAG = "--confirm-v2";

if (!process.argv.includes(CONFIRMATION_FLAG)) {
  throw new Error(`Importação cancelada. Execute novamente com ${CONFIRMATION_FLAG}.`);
}

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd(), true);

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const configs = {
  hatch: ["Hatch", "hatch", "/cards-images/hatch.png", 1],
  sedan: ["Sedan", "sedan", "/cards-images/sedan.png", 2],
  suv: ["SUV", "suv", "/cards-images/SUV.png", 3],
  "pick-up": ["Pick-up", "pick-up", "/cards-images/pick-up.png", 4],
  "7-lugares": ["7 Lugares", "7-lugares", "/cards-images/7lugares.png", 5],
  ambulancia: ["Ambulâncias", "ambulancia", "/cards-images/ambulancia.png", 6],
  van: ["Vans", "van", "/cards-images/van.png", 7],
  onibus: ["Ônibus", "onibus", "/cards-images/bus.png", 8],
  caminhao: ["Caminhões", "caminhao", "/cards-images/caminhao.png", 9],
  trator: ["Tratores", "trator", "/cards-images/trator.png", 10],
  tratores: ["Tratores", "trator", "/cards-images/trator.png", 10],
};
const canonicalKeys = ["hatch", "sedan", "suv", "pick-up", "7-lugares", "ambulancia", "van", "onibus", "caminhao", "trator"];

function hash(data) {
  return createHash("sha256").update(JSON.stringify(data)).digest("hex");
}

function converter(data) {
  const categorias = Object.entries(data).map(([chave, veiculos], index) => {
    const config = configs[chave];
    if (!config) throw new Error(`Categoria não mapeada: ${chave}`);
    if (!Array.isArray(veiculos)) throw new Error(`Categoria não é um array: ${chave}`);
    const [nome, slug, imagem, ordem] = config;
    return {
      id: `categoria-${slug}`,
      nome,
      slug,
      imagem,
      ordem,
      veiculos: veiculos.map((veiculo, vehicleIndex) => {
        for (const campo of ["nome", "valor", "descricao"]) {
          if (typeof veiculo?.[campo] !== "string") {
            throw new Error(`${chave}[${vehicleIndex}].${campo} é inválido.`);
          }
        }
        return {
          id: `${slug}-${vehicleIndex + 1}`,
          nome: veiculo.nome,
          valor: veiculo.valor,
          descricao: veiculo.descricao,
        };
      }),
      _sourceIndex: index,
    };
  });

  for (const chave of canonicalKeys) {
    const [nome, slug, imagem, ordem] = configs[chave];
    if (!categorias.some((categoria) => categoria.slug === slug)) {
      categorias.push({
        id: `categoria-${slug}`,
        nome,
        slug,
        imagem,
        ordem,
        veiculos: [],
        _sourceIndex: categorias.length,
      });
    }
  }

  const slugs = new Set();
  for (const categoria of categorias) {
    if (slugs.has(categoria.slug)) throw new Error(`Slug duplicado: ${categoria.slug}`);
    slugs.add(categoria.slug);
  }

  return {
    schemaVersion: 2,
    categorias: categorias
      .sort((a, b) => a.ordem - b.ordem || a._sourceIndex - b._sourceIndex)
      .map(({ _sourceIndex, ...categoria }) => categoria),
  };
}

const db = getFirestore(app);
const sourceRef = doc(db, "sites", SOURCE_DOCUMENT);
const targetRef = doc(db, "sites", TARGET_DOCUMENT);
const sourceBefore = await getDoc(sourceRef);

if (!sourceBefore.exists()) throw new Error("Documento original não encontrado.");

const originalData = sourceBefore.data();
const originalHash = hash(originalData);
const catalogo = converter(originalData);

await setDoc(targetRef, catalogo, { merge: false });

const [sourceAfter, targetAfter] = await Promise.all([getDoc(sourceRef), getDoc(targetRef)]);
const sourceUnchanged = sourceAfter.exists() && hash(sourceAfter.data()) === originalHash;
const targetData = targetAfter.data();
const vehicleCount = targetData?.categorias?.reduce(
  (total, categoria) => total + (Array.isArray(categoria.veiculos) ? categoria.veiculos.length : 0),
  0,
);

if (!sourceUnchanged) throw new Error("Falha de segurança: o documento original não permaneceu idêntico.");
if (targetData?.schemaVersion !== 2) throw new Error("Falha ao validar schemaVersion do documento V2.");

console.log(JSON.stringify({
  source: `sites/${SOURCE_DOCUMENT}`,
  sourceUnchanged,
  target: `sites/${TARGET_DOCUMENT}`,
  categories: targetData.categorias.length,
  vehicles: vehicleCount,
}, null, 2));

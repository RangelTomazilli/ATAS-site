"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { FaCheck, FaEdit, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { getCatalogoV2, salvarCatalogoV2 } from "@/app/components/Services/firebaseCatalogoV2";
import { getVeiculosFromFirebase } from "@/app/components/Services/firebaseGetVeiculos";
import {
  CARD_IMAGES,
  CategoriaV2,
  CatalogoV2,
  criarId,
  criarSlug,
  VeiculoV2,
} from "@/app/lib/catalogoV2";
import { prepararMigracaoV2, ResumoMigracaoV2 } from "@/app/lib/migracaoCatalogoV2";

const catalogoVazio: CatalogoV2 = { schemaVersion: 2, categorias: [] };
const veiculoVazio = { nome: "", valor: "", descricao: "" };
const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER || "";
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || "";

export default function AdminV2() {
  const pathname = usePathname();
  const isHomologacao = pathname === "/atas-admin-v2";
  const [catalogo, setCatalogo] = useState<CatalogoV2 | null>(null);
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [editandoCategoria, setEditandoCategoria] = useState<string | null>(null);
  const [categoriaForm, setCategoriaForm] = useState({ nome: "", slug: "", imagem: CARD_IMAGES[0] as string, ordem: 1 });
  const [categoriaVeiculo, setCategoriaVeiculo] = useState<string | null>(null);
  const [editandoVeiculo, setEditandoVeiculo] = useState<string | null>(null);
  const [veiculoForm, setVeiculoForm] = useState(veiculoVazio);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState("");
  const [carregandoPrevia, setCarregandoPrevia] = useState(false);
  const [previaMigracao, setPreviaMigracao] = useState<ResumoMigracaoV2[] | null>(null);
  const [catalogoMigracao, setCatalogoMigracao] = useState<CatalogoV2 | null>(null);

  const carregar = useCallback(async () => {
    setLoading(true);
    setErro("");
    try {
      setCatalogo((await getCatalogoV2()) ?? catalogoVazio);
    } catch (error) {
      setErro(error instanceof Error ? error.message : "Falha ao carregar o catálogo V2.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void carregar(); }, [carregar]);

  async function persistir(proximo: CatalogoV2, sucesso: string) {
    setSalvando(true);
    setErro("");
    try {
      await salvarCatalogoV2(proximo);
      setCatalogo(proximo);
      setMensagem(sucesso);
      window.setTimeout(() => setMensagem(""), 2500);
    } catch (error) {
      setErro(error instanceof Error ? error.message : "Não foi possível salvar no documento V2.");
      throw error;
    } finally {
      setSalvando(false);
    }
  }

  function iniciarCategoria(categoria?: CategoriaV2) {
    setEditandoCategoria(categoria?.id ?? "nova");
    setCategoriaForm(categoria ? {
      nome: categoria.nome,
      slug: categoria.slug,
      imagem: categoria.imagem,
      ordem: categoria.ordem,
    } : {
      nome: "",
      slug: "",
      imagem: CARD_IMAGES[0],
      ordem: (catalogo?.categorias.length ?? 0) + 1,
    });
  }

  async function salvarCategoria(event: FormEvent) {
    event.preventDefault();
    if (!catalogo) return;
    const slug = criarSlug(categoriaForm.slug || categoriaForm.nome);
    if (!slug) return setErro("Informe um nome ou slug válido.");
    const duplicada = catalogo.categorias.some((item) => item.slug === slug && item.id !== editandoCategoria);
    if (duplicada) return setErro("Já existe uma categoria com esse slug.");

    const categorias = editandoCategoria === "nova"
      ? [...catalogo.categorias, { id: criarId(), ...categoriaForm, slug, veiculos: [] }]
      : catalogo.categorias.map((item) => item.id === editandoCategoria ? { ...item, ...categoriaForm, slug } : item);

    await persistir({ ...catalogo, categorias }, "Categoria salva com sucesso.");
    setEditandoCategoria(null);
  }

  async function excluirCategoria(categoria: CategoriaV2) {
    if (!catalogo) return;
    if (categoria.veiculos.length) {
      return setErro("Exclua ou mova os veículos antes de excluir esta categoria.");
    }
    if (!window.confirm(`Excluir a categoria “${categoria.nome}” do documento V2?`)) return;
    await persistir(
      { ...catalogo, categorias: catalogo.categorias.filter((item) => item.id !== categoria.id) },
      "Categoria excluída do V2."
    );
  }

  function iniciarVeiculo(categoriaId: string, veiculo?: VeiculoV2) {
    setCategoriaVeiculo(categoriaId);
    setEditandoVeiculo(veiculo?.id ?? "novo");
    setVeiculoForm(veiculo ? { nome: veiculo.nome, valor: veiculo.valor, descricao: veiculo.descricao } : veiculoVazio);
  }

  async function salvarVeiculo(event: FormEvent) {
    event.preventDefault();
    if (!catalogo || !categoriaVeiculo) return;
    const categorias = catalogo.categorias.map((categoria) => {
      if (categoria.id !== categoriaVeiculo) return categoria;
      const veiculos = editandoVeiculo === "novo"
        ? [...categoria.veiculos, { id: criarId(), ...veiculoForm }]
        : categoria.veiculos.map((item) => item.id === editandoVeiculo ? { ...item, ...veiculoForm } : item);
      return { ...categoria, veiculos };
    });
    await persistir({ ...catalogo, categorias }, "Veículo salvo com sucesso.");
    setCategoriaVeiculo(null);
    setEditandoVeiculo(null);
  }

  async function excluirVeiculo(categoriaId: string, veiculo: VeiculoV2) {
    if (!catalogo || !window.confirm(`Excluir “${veiculo.nome}” do documento V2?`)) return;
    const categorias = catalogo.categorias.map((categoria) => categoria.id === categoriaId
      ? { ...categoria, veiculos: categoria.veiculos.filter((item) => item.id !== veiculo.id) }
      : categoria);
    await persistir({ ...catalogo, categorias }, "Veículo excluído do V2.");
  }

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    if (loginUser === ADMIN_USER && loginPass === ADMIN_PASS) {
      setIsAuthenticated(true);
      setLoginError("");
      return;
    }
    setLoginError("Usuário ou senha inválidos");
  }

  async function carregarPreviaMigracao() {
    setCarregandoPrevia(true);
    setErro("");
    try {
      const legado = await getVeiculosFromFirebase();
      if (!legado) throw new Error("O documento atual não foi encontrado.");
      const migracao = prepararMigracaoV2(legado);
      setPreviaMigracao(migracao.resumo);
      setCatalogoMigracao(migracao.catalogo);
    } catch (error) {
      setErro(error instanceof Error ? error.message : "Não foi possível preparar a prévia.");
    } finally {
      setCarregandoPrevia(false);
    }
  }

  async function importarCatalogoV2() {
    if (!catalogoMigracao) return;
    const totalVeiculos = catalogoMigracao.categorias.reduce((total, categoria) => total + categoria.veiculos.length, 0);
    if (!window.confirm(`Substituir somente o documento sites/atas-publicas-v2 por ${catalogoMigracao.categorias.length} categorias e ${totalVeiculos} veículos?`)) return;
    await persistir(catalogoMigracao, "Dados atuais importados com sucesso para o V2.");
    setPreviaMigracao(null);
    setCatalogoMigracao(null);
  }

  if (loading) return <p className="min-h-screen py-16 text-center text-blue-700">Carregando admin V2...</p>;
  if (!catalogo) return <p className="min-h-screen py-16 text-center text-red-600">{erro}</p>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 px-4 py-10 text-gray-900 md:px-10">
      {!isAuthenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <form onSubmit={handleLogin} className="flex w-full max-w-sm flex-col gap-6 rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-2xl" autoComplete="off">
            <h2 className="text-center text-2xl font-bold text-blue-700">Acesso Restrito</h2>
            <p className="text-center text-sm text-gray-500">Use o mesmo acesso da administração atual.</p>
            <input className="rounded-lg border-2 border-blue-200 p-2 focus:ring-2 focus:ring-blue-400" placeholder="Usuário" value={loginUser} onChange={(event) => setLoginUser(event.target.value)} required autoFocus />
            <input className="rounded-lg border-2 border-blue-200 p-2 focus:ring-2 focus:ring-blue-400" placeholder="Senha" type="password" value={loginPass} onChange={(event) => setLoginPass(event.target.value)} required />
            {loginError && <p className="text-center font-semibold text-red-600">{loginError}</p>}
            <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 font-bold text-white shadow">Entrar</button>
          </form>
        </div>
      )}
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 drop-shadow-lg md:text-5xl">Administração de Veículos</h1>
            <p className="mt-2 text-blue-600">Gerencie facilmente todas as categorias e veículos do site.</p>
            {isHomologacao && <p className="mt-1 text-xs font-semibold text-gray-500">Ambiente de homologação: sites/atas-publicas-v2</p>}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={isHomologacao ? "/v2" : "/"} className="rounded-xl bg-white px-5 py-3 font-bold text-blue-700 shadow">Visualizar catálogo</Link>
            {isHomologacao && <button onClick={() => void carregarPreviaMigracao()} disabled={carregandoPrevia} className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-white shadow disabled:opacity-50">{carregandoPrevia ? "Lendo dados atuais..." : "Prévia da importação"}</button>}
            <button onClick={() => iniciarCategoria()} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-700 px-5 py-3 font-bold text-white shadow-lg"><FaPlus /> Nova categoria</button>
          </div>
        </div>

        {mensagem && <p className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">{mensagem}</p>}
        {erro && <p className="mb-6 rounded-lg bg-red-100 p-4 text-red-700">{erro}</p>}

        {previaMigracao && (
          <section className="mb-8 rounded-xl border-2 border-amber-200 bg-white p-6 shadow-xl">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-amber-700">Prévia da importação</h2>
                <p className="text-sm text-gray-600">Somente leitura. Nenhum dado foi gravado ou modificado.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => void importarCatalogoV2()} disabled={salvando || !catalogoMigracao} className="flex items-center gap-2 rounded bg-green-700 px-4 py-2 font-bold text-white disabled:opacity-50"><FaCheck /> Importar para o V2</button>
                <button onClick={() => { setPreviaMigracao(null); setCatalogoMigracao(null); }} className="flex items-center gap-2 rounded bg-gray-200 px-3 py-2"><FaTimes /> Fechar</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead><tr className="border-b-2 border-amber-200 text-sm text-gray-600"><th className="p-3">Origem</th><th className="p-3">Nome amigável</th><th className="p-3">Slug</th><th className="p-3">Imagem</th><th className="p-3 text-center">Veículos</th><th className="p-3">Validação</th></tr></thead>
                <tbody>{previaMigracao.map((item) => (
                  <tr key={`${item.chaveOriginal}-${item.categoria.slug}`} className="border-b align-top">
                    <td className="p-3 font-mono text-sm">{item.chaveOriginal}</td>
                    <td className="p-3 font-semibold">{item.categoria.nome}</td>
                    <td className="p-3 font-mono text-sm">{item.categoria.slug}</td>
                    <td className="p-3"><Image src={item.categoria.imagem} alt={`Imagem de ${item.categoria.nome}`} width={48} height={32} className="h-8 w-12 object-contain" /></td>
                    <td className="p-3 text-center font-bold">{item.categoria.veiculos.length}</td>
                    <td className="p-3 text-sm">{item.avisos.length ? <ul className="list-disc space-y-1 pl-4 text-amber-700">{item.avisos.map((aviso) => <li key={aviso}>{aviso}</li>)}</ul> : <span className="font-semibold text-green-700">Pronto</span>}</td>
                  </tr>
                ))}</tbody>
                <tfoot><tr className="bg-amber-50 font-bold"><td className="p-3" colSpan={4}>Total</td><td className="p-3 text-center">{previaMigracao.reduce((total, item) => total + item.categoria.veiculos.length, 0)}</td><td className="p-3">{previaMigracao.length} categoria(s)</td></tr></tfoot>
              </table>
            </div>
          </section>
        )}

        {editandoCategoria && (
          <form onSubmit={salvarCategoria} className="mb-8 rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-bold">{editandoCategoria === "nova" ? "Criar categoria" : "Editar categoria"}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <label>Nome amigável<input required value={categoriaForm.nome} onChange={(e) => setCategoriaForm((v) => ({ ...v, nome: e.target.value, slug: editandoCategoria === "nova" ? criarSlug(e.target.value) : v.slug }))} className="mt-1 w-full rounded border p-2" /></label>
              <label>Slug<input required value={categoriaForm.slug} onChange={(e) => setCategoriaForm((v) => ({ ...v, slug: criarSlug(e.target.value) }))} className="mt-1 w-full rounded border p-2" /></label>
              <label>Ordem <span className="text-xs font-normal text-gray-500">(posição na Página)</span><input required min="0" type="number" value={categoriaForm.ordem} onChange={(e) => setCategoriaForm((v) => ({ ...v, ordem: Number(e.target.value) }))} className="mt-1 w-full rounded border p-2" /></label>
            </div>
            <p className="mb-3 mt-6 font-semibold">Imagem do card</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {CARD_IMAGES.map((imagem) => (
                <button type="button" key={imagem} onClick={() => setCategoriaForm((v) => ({ ...v, imagem }))} className={`rounded-lg border-2 p-2 ${categoriaForm.imagem === imagem ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}>
                  <Image src={imagem} alt={imagem} width={150} height={100} className="h-20 w-full object-contain" />
                </button>
              ))}
            </div>
            <div className="mt-6 flex gap-3"><button disabled={salvando} className="flex items-center gap-2 rounded bg-blue-700 px-5 py-2 text-white disabled:opacity-50"><FaCheck /> Salvar</button><button type="button" onClick={() => setEditandoCategoria(null)} className="flex items-center gap-2 rounded bg-gray-300 px-5 py-2"><FaTimes /> Cancelar</button></div>
          </form>
        )}

        {categoriaVeiculo && (
          <form onSubmit={salvarVeiculo} className="mb-8 rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-bold">{editandoVeiculo === "novo" ? "Adicionar veículo" : "Editar veículo"}</h2>
            <div className="grid gap-4 md:grid-cols-2"><input required placeholder="Nome" value={veiculoForm.nome} onChange={(e) => setVeiculoForm((v) => ({ ...v, nome: e.target.value }))} className="rounded border p-2" /><input required placeholder="Valor" value={veiculoForm.valor} onChange={(e) => setVeiculoForm((v) => ({ ...v, valor: e.target.value }))} className="rounded border p-2" /></div>
            <textarea required rows={6} placeholder="Descrição" value={veiculoForm.descricao} onChange={(e) => setVeiculoForm((v) => ({ ...v, descricao: e.target.value }))} className="mt-4 w-full rounded border p-2" />
            <div className="mt-4 flex gap-3"><button disabled={salvando} className="flex items-center gap-2 rounded bg-blue-700 px-5 py-2 text-white disabled:opacity-50"><FaCheck /> Salvar</button><button type="button" onClick={() => setCategoriaVeiculo(null)} className="flex items-center gap-2 rounded bg-gray-300 px-5 py-2"><FaTimes /> Cancelar</button></div>
          </form>
        )}

        <div className="space-y-6">
          {[...catalogo.categorias].sort((a, b) => a.ordem - b.ordem).map((categoria) => (
            <section key={categoria.id} className="rounded-xl bg-white p-6 shadow">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4"><Image src={categoria.imagem} alt={categoria.nome} width={100} height={70} className="h-16 w-24 object-contain" /><div><h2 className="text-2xl font-bold text-blue-800">{categoria.nome}</h2><p className="text-sm text-gray-500">/{categoria.slug} · ordem {categoria.ordem} · {categoria.veiculos.length} veículo(s)</p></div></div>
                <div className="flex flex-wrap gap-2"><button onClick={() => iniciarVeiculo(categoria.id)} className="flex items-center gap-2 rounded bg-green-600 px-3 py-2 text-white"><FaPlus /> Adicionar veículo</button><button onClick={() => iniciarCategoria(categoria)} className="flex items-center gap-2 rounded bg-blue-600 px-3 py-2 text-white"><FaEdit /> Editar categoria</button><button onClick={() => void excluirCategoria(categoria)} className="flex items-center gap-2 rounded bg-red-600 px-3 py-2 text-white"><FaTrash /> Excluir categoria</button></div>
              </div>
              <div className="space-y-3">
                {categoria.veiculos.map((veiculo) => <div key={veiculo.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 p-4 shadow-sm"><div><strong>{veiculo.nome}</strong><span className="ml-3 text-green-700">{veiculo.valor}</span></div><div className="flex gap-2"><button onClick={() => iniciarVeiculo(categoria.id, veiculo)} className="flex items-center gap-2 rounded bg-blue-100 px-3 py-1 text-blue-800"><FaEdit /> Editar</button><button onClick={() => void excluirVeiculo(categoria.id, veiculo)} className="flex items-center gap-2 rounded bg-red-100 px-3 py-1 text-red-700"><FaTrash /> Excluir</button></div></div>)}
                {!categoria.veiculos.length && <p className="text-gray-500">Categoria vazia — continuará visível no catálogo.</p>}
              </div>
            </section>
          ))}
          {!catalogo.categorias.length && <p className="rounded-xl bg-white p-8 text-center text-gray-600 shadow">O documento V2 ainda não existe ou está vazio. Crie a primeira categoria para inicializá-lo.</p>}
        </div>
      </div>
    </main>
  );
}

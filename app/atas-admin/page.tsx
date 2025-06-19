'use client';
import React, { useEffect, useState, useRef } from 'react';
import { getVeiculosFromFirebase } from "@/app/components/Services/firebaseGetVeiculos";
import { updateVeiculosInFirebase } from "@/app/components/Services/firebaseUpdateVeiculos";
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

interface Veiculo {
  nome: string;
  valor: string;
  descricao: string;
}

// Categorias predefinidas (as mesmas da home)
const CATEGORIAS = [
  "hatch",
  "sedan",
  "suv",
  "pick-up",
  "7-lugares",
  "ambulancia",
  "van",
  "onibus",
  "caminhao",
  "trator"
];

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER || '';
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || '';

export default function AtasAdmin() {
  const [veiculosData, setVeiculosData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [addCategoria, setAddCategoria] = useState<string | null>(null);
  const [newVeiculo, setNewVeiculo] = useState<Veiculo>({ nome: '', valor: '', descricao: '' });
  const [newCategoria, setNewCategoria] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [editIdx, setEditIdx] = useState<{ categoria: string; idx: number } | null>(null);
  const [editVeiculo, setEditVeiculo] = useState<Veiculo>({ nome: '', valor: '', descricao: '' });
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedDesc, setExpandedDesc] = useState<{ [key: string]: boolean }>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const fetchVeiculos = async () => {
    setLoading(true);
    const data = await getVeiculosFromFirebase();
    setVeiculosData(data);
    setLoading(false);
  };

  const handleAdd = (categoria: string) => {
    setAddCategoria(categoria);
    setNewVeiculo({ nome: '', valor: '', descricao: '' });
  };

  const handleAddNewCategoria = () => {
    setAddCategoria("___nova___");
    setNewVeiculo({ nome: "", valor: "", descricao: "" });
    setNewCategoria("");
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
    setAddCategoria(null);
    setNewCategoria("");
    setNewVeiculo({ nome: "", valor: "", descricao: "" });
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!veiculosData) return;
    setSubmitting(true);
    let categoria = addCategoria;
    if (addCategoria === "___nova___") {
      categoria = newCategoria;
      if (!categoria || Object.keys(veiculosData).includes(categoria)) {
        setSubmitting(false);
        return;
      }
    }
    const updated = { ...veiculosData };
    const arr = Array.isArray(updated[categoria!]) ? [...(updated[categoria!] as Veiculo[])] : [];
    arr.push(newVeiculo);
    updated[categoria!] = arr;
    await updateVeiculosInFirebase(updated);
    closeModal();
    setSuccessMsg("Veículo adicionado com sucesso!");
    await fetchVeiculos();
    setSubmitting(false);
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  const handleEdit = (categoria: string, idx: number) => {
    if (!veiculosData) return;
    const arr = Array.isArray(veiculosData[categoria]) ? (veiculosData[categoria] as Veiculo[]) : [];
    setEditIdx({ categoria, idx });
    setEditVeiculo({ ...arr[idx] });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!veiculosData || !editIdx) return;
    setSubmitting(true);
    const updated = { ...veiculosData };
    const arr = Array.isArray(updated[editIdx.categoria]) ? [...(updated[editIdx.categoria] as Veiculo[])] : [];
    arr[editIdx.idx] = editVeiculo;
    updated[editIdx.categoria] = arr;
    await updateVeiculosInFirebase(updated);
    setEditIdx(null);
    setEditVeiculo({ nome: '', valor: '', descricao: '' });
    setSuccessMsg("Veículo editado com sucesso!");
    await fetchVeiculos();
    setSubmitting(false);
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  const handleDelete = async (categoria: string, idx: number) => {
    if (!veiculosData) return;
    if (!window.confirm('Tem certeza que deseja excluir este veículo?')) return;
    const updated = { ...veiculosData };
    const arr = Array.isArray(updated[categoria]) ? [...(updated[categoria] as Veiculo[])] : [];
    arr.splice(idx, 1);
    updated[categoria] = arr;
    await updateVeiculosInFirebase(updated);
    setSuccessMsg("Veículo excluído!");
    await fetchVeiculos();
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  // Modal de login obrigatório
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginUser === ADMIN_USER &&
      loginPass === ADMIN_PASS
    ) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Usuário ou senha inválidos');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <span className="text-xl text-blue-600">Carregando veículos...</span>
      </div>
    );
  }

  if (!veiculosData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <span className="text-xl text-red-600">Nenhum dado encontrado.</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 px-2 py-8 md:px-8">
      {/* Modal de login */}
      {!isAuthenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-3xl shadow-2xl border-2 border-blue-100 p-8 w-full max-w-sm flex flex-col gap-6 relative animate-fade-in"
            autoComplete="off"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">Acesso Restrito</h2>
            <input
              className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Usuário"
              value={loginUser}
              onChange={e => setLoginUser(e.target.value)}
              required
              autoFocus
            />
            <input
              className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Senha"
              type="password"
              value={loginPass}
              onChange={e => setLoginPass(e.target.value)}
              required
            />
            {loginError && <div className="text-red-600 text-center font-semibold">{loginError}</div>}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-bold flex items-center gap-2"
            >
              Entrar
            </button>
          </form>
        </div>
      )}
      {/* Conteúdo do admin só aparece se autenticado */}
      {isAuthenticated && (
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2 text-center drop-shadow-lg tracking-tight animate-fade-in">Administração de Veículos</h1>
          <p className="text-center text-lg text-blue-600 mb-8 animate-fade-in">Gerencie facilmente todos os veículos do site. Adicione, edite ou exclua com apenas um clique!</p>
          {successMsg && (
            <div className="mb-6 flex justify-center animate-fade-in">
              <span className="bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow font-semibold flex items-center gap-2 border border-green-300">
                <FaCheck className="text-green-600" /> {successMsg}
              </span>
            </div>
          )}
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:gap-4 justify-center">
            <button
              onClick={handleAddNewCategoria}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:from-green-600 hover:to-green-800 transition-all font-bold text-lg mb-2 md:mb-0 animate-fade-in"
            >
              <FaPlus /> Adicionar veículo em nova categoria
            </button>
          </div>
          {showAddModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
              <div ref={modalRef} className="bg-white rounded-3xl shadow-2xl border-2 border-blue-100 p-8 w-full max-w-2xl flex flex-col md:flex-row gap-8 relative animate-fade-in">
                <form
                  onSubmit={handleAddSubmit}
                  className="flex-1 flex flex-col gap-4"
                >
                  <h2 className="text-2xl font-bold text-blue-700 mb-2">Adicionar veículo</h2>
                  <select
                    className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    value={newCategoria}
                    onChange={e => setNewCategoria(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Selecione a categoria
                    </option>
                    {CATEGORIAS.filter(
                      cat => !(veiculosData && Object.keys(veiculosData).includes(cat))
                    ).map(cat => (
                      <option key={cat} value={cat} className="capitalize">
                        {cat}
                      </option>
                    ))}
                  </select>
                  <input
                    className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Nome"
                    value={newVeiculo.nome}
                    onChange={e => setNewVeiculo(v => ({ ...v, nome: e.target.value }))}
                    required
                  />
                  <input
                    className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Valor"
                    value={newVeiculo.valor}
                    onChange={e => setNewVeiculo(v => ({ ...v, valor: e.target.value }))}
                    required
                  />
                  <textarea
                    className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Descrição"
                    value={newVeiculo.descricao}
                    onChange={e => setNewVeiculo(v => ({ ...v, descricao: e.target.value }))}
                    required
                    rows={4}
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-bold flex items-center gap-2 disabled:opacity-50"
                    >
                      <FaCheck /> Salvar
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 font-bold flex items-center gap-2"
                    >
                      <FaTimes /> Cancelar
                    </button>
                  </div>
                </form>
                <div className="hidden md:block flex-1 bg-blue-50 rounded-2xl p-6 shadow-inner border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">Preview</h3>
                  <div className="font-bold text-xl text-blue-800 mb-1 flex items-center gap-2">
                    {newVeiculo.nome || <span className="text-gray-400">Nome do veículo</span>}
                  </div>
                  <div className="text-green-700 font-bold text-lg mb-2">
                    {newVeiculo.valor || <span className="text-gray-400">Valor</span>}
                  </div>
                  <div className="text-gray-700 text-sm mt-2 max-w-2xl break-words whitespace-pre-line min-h-[80px]">
                    {newVeiculo.descricao || <span className="text-gray-400">Descrição</span>}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
                  aria-label="Fechar modal"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
          <div className="grid gap-10">
            {Object.entries(veiculosData || {}).map(([categoria, veiculos]) => (
              <div
                key={categoria}
                className="bg-white/80 rounded-3xl shadow-2xl border-2 border-blue-100 p-6 md:p-10 animate-fade-in"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-blue-700 capitalize tracking-wide drop-shadow">
                    {categoria}
                  </h2>
                  <button
                    onClick={() => handleAdd(categoria)}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:from-green-600 hover:to-green-800 transition-all font-semibold"
                  >
                    <FaPlus /> Adicionar veículo
                  </button>
                </div>
                {addCategoria === categoria && (
                  <form
                    onSubmit={handleAddSubmit}
                    className="bg-blue-50 rounded-xl shadow p-6 mb-8 flex flex-col md:flex-row md:items-end gap-4 border border-blue-200 animate-fade-in"
                  >
                    <input
                      className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                      placeholder="Nome"
                      value={newVeiculo.nome}
                      onChange={e => setNewVeiculo(v => ({ ...v, nome: e.target.value }))}
                      required
                    />
                    <input
                      className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                      placeholder="Valor"
                      value={newVeiculo.valor}
                      onChange={e => setNewVeiculo(v => ({ ...v, valor: e.target.value }))}
                      required
                    />
                    <textarea
                      className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                      placeholder="Descrição"
                      value={newVeiculo.descricao}
                      onChange={e => setNewVeiculo(v => ({ ...v, descricao: e.target.value }))}
                      required
                      rows={4}
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-bold flex items-center gap-2 disabled:opacity-50"
                      >
                        <FaCheck /> Salvar
                      </button>
                      <button
                        type="button"
                        onClick={() => setAddCategoria(null)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 font-bold flex items-center gap-2"
                      >
                        <FaTimes /> Cancelar
                      </button>
                    </div>
                  </form>
                )}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {(veiculos as Veiculo[]).map((veiculo, idx) => {
                    const descKey = categoria + idx;
                    const isExpanded = expandedDesc[descKey];
                    const isLong = veiculo.descricao.length > 300 || veiculo.descricao.split("\n").length > 4;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 flex flex-col justify-between min-h-[260px] relative group hover:scale-[1.025] transition-transform animate-fade-in"
                      >
                        {editIdx && editIdx.categoria === categoria && editIdx.idx === idx ? (
                          <form onSubmit={handleEditSubmit} className="flex flex-col gap-2 animate-fade-in">
                            <input
                              className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                              placeholder="Nome"
                              value={editVeiculo.nome}
                              onChange={e => setEditVeiculo(v => ({ ...v, nome: e.target.value }))}
                              required
                            />
                            <input
                              className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                              placeholder="Valor"
                              value={editVeiculo.valor}
                              onChange={e => setEditVeiculo(v => ({ ...v, valor: e.target.value }))}
                              required
                            />
                            <textarea
                              className="border-2 border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                              placeholder="Descrição"
                              value={editVeiculo.descricao}
                              onChange={e => setEditVeiculo(v => ({ ...v, descricao: e.target.value }))}
                              required
                            />
                            <div className="flex gap-2 mt-2">
                              <button
                                type="submit"
                                disabled={submitting}
                                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-bold flex items-center gap-2 disabled:opacity-50"
                              >
                                <FaCheck /> Salvar
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditIdx(null)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 font-bold flex items-center gap-2"
                              >
                                <FaTimes /> Cancelar
                              </button>
                            </div>
                          </form>
                        ) : (
                          <>
                            <div>
                              <div className="font-bold text-xl text-blue-800 mb-1 flex items-center gap-2">
                                {veiculo.nome}
                              </div>
                              <div className="text-green-700 font-bold text-lg mb-2">{veiculo.valor}</div>
                              <div className={`text-gray-700 text-sm mt-2 max-w-2xl break-words whitespace-pre-line min-h-[60px] ${!isExpanded && isLong ? 'line-clamp-4' : ''}`}>
                                {veiculo.descricao}
                              </div>
                              {isLong && (
                                <button
                                  className="text-blue-600 font-semibold mt-2 hover:underline focus:outline-none"
                                  onClick={() => setExpandedDesc(prev => ({ ...prev, [descKey]: !isExpanded }))}
                                >
                                  {isExpanded ? 'Ver menos' : 'Ver mais'}
                                </button>
                              )}
                            </div>
                            <div className="flex gap-2 mt-4 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => handleEdit(categoria, idx)}
                                className="bg-yellow-400 text-white px-3 py-2 rounded-lg shadow hover:bg-yellow-500 flex items-center gap-1 font-bold"
                              >
                                <FaEdit /> Editar
                              </button>
                              <button
                                onClick={() => handleDelete(categoria, idx)}
                                className="bg-red-600 text-white px-3 py-2 rounded-lg shadow hover:bg-red-700 flex items-center gap-1 font-bold"
                              >
                                <FaTrash /> Excluir
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1);
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
} 
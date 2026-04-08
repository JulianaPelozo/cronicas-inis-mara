import { useState, useEffect } from "react";
import { FaUser, FaUsers, FaMagic, FaTag, FaPlus } from "react-icons/fa";
import { criarPersonagem, listarPersonagens } from "../services/personagensService";
import { PersonagemCard } from "../components/Card";

export default function Personagens() {
  const [nome, setNome] = useState("");
  const [cla, setCla] = useState("");
  const [magia, setMagia] = useState("");
  const [status, setStatus] = useState("");
  const [personagens, setPersonagens] = useState([]);

  async function carregarPersonagens() {
    const dados = await listarPersonagens();
    setPersonagens(dados);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!nome || !cla || !magia || !status) return;
    await criarPersonagem(nome, cla, magia, status);
    setNome("");
    setCla("");
    setMagia("");
    setStatus("");
    carregarPersonagens();
  }

  useEffect(() => {
    carregarPersonagens();
  }, []);

  return (
    <div className="personagens-container">
      <h1>⚔️ Personagens</h1>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input className="input-field" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <FaUsers className="input-icon" />
              <input className="input-field" placeholder="Clã" value={cla} onChange={(e) => setCla(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <FaMagic className="input-icon" />
              <input className="input-field" placeholder="Magia" value={magia} onChange={(e) => setMagia(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <FaTag className="input-icon" />
              <input className="input-field" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>
            <button type="submit" className="btn">
              <FaPlus /> Criar Personagem
            </button>
          </div>
        </form>
      </div>

      {personagens.length === 0 ? (
        <div className="empty-state">
          Nenhum personagem foi criado ainda.
        </div>
      ) : (
        <div className="card-grid">
          {personagens.map((p) => (
            <PersonagemCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}
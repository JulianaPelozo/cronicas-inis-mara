import { useState, useEffect } from "react";
import {
  criarPersonagem,
  listarPersonagens,
} from "../services/personagensService";

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

  async function handleSubmit() {
    await criarPersonagem(nome, cla, magia, status);
    carregarPersonagens();
  }

  useEffect(() => {
    carregarPersonagens();
  }, []);

  return (
    <div className="personagens-container">
      <h1 className="title">Personagens</h1>

      <div className="form">
        <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        <input placeholder="Clã" onChange={(e) => setCla(e.target.value)} />
        <input placeholder="Magia" onChange={(e) => setMagia(e.target.value)} />
        <input placeholder="Status" onChange={(e) => setStatus(e.target.value)} />

        <button onClick={handleSubmit}>Criar</button>
      </div>

      <div className="grid">
        {personagens.map((p) => (
          <div key={p.id} className="card">
            <h2>{p.nome}</h2>
            <p><strong>Clã:</strong> {p.cla}</p>
            <p><strong>Magia:</strong> {p.magia}</p>
            <p><strong>Status:</strong> {p.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
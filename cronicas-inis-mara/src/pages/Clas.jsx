import { useState, useEffect } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { criarCla, listarClas } from "../services/clasService";
import { ClaCard } from "../components/Card";

export default function Clas() {
  const [nome, setNome] = useState("");
  const [elemento, setElemento] = useState("");
  const [lema, setLema] = useState("");
  const [clas, setClas] = useState([]);

  async function carregarClas() {
    const dados = await listarClas();
    setClas(dados);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!nome || !elemento || !lema) return;
    await criarCla(nome, elemento, lema);
    setNome("");
    setElemento("");
    setLema("");
    carregarClas();
  }

  useEffect(() => {
    carregarClas();
  }, []);

  return (
    <div className="clas-container">
      <h1>🐉 Clãs de Inis Mara</h1>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <FaDragon className="input-icon" />
              <input
                className="input-field"
                placeholder="Nome do clã"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <FaMountain className="input-icon" />
              <input
                className="input-field"
                placeholder="Elemento"
                value={elemento}
                onChange={(e) => setElemento(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <FaSearch className="input-icon" />
              <input
                className="input-field"
                placeholder="Lema"
                value={lema}
                onChange={(e) => setLema(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              <FaPlus /> Criar Clã
            </button>
          </div>
        </form>
      </div>

      {clas.length === 0 ? (
        <div className="empty-state">
          Nenhum clã foi criado ainda. Use o formulário acima para começar.
        </div>
      ) : (
        <div className="card-grid">
          {clas.map((cla) => (
            <ClaCard key={cla.id} {...cla} />
          ))}
        </div>
      )}
    </div>
  );
}
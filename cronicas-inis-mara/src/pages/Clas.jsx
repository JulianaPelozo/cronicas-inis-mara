import { useState, useEffect } from "react";
import { criarCla, listarClas } from "../services/clasService";

export default function Clas() {
  const [nome, setNome] = useState("");
  const [elemento, setElemento] = useState("");
  const [lema, setLema] = useState("");
  const [clas, setClas] = useState([]);

  async function carregarClas() {
    const dados = await listarClas();
    setClas(dados);
  }

  async function handleSubmit() {
    await criarCla(nome, elemento, lema);
    carregarClas();
  }

  useEffect(() => {
    carregarClas();
  }, []);

return (
  <div className="clas-container">
    <h1 className="title">🏰 Clãs de Inis Mara</h1>

    <div className="form">
      <input placeholder="Nome do clã" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Elemento" onChange={(e) => setElemento(e.target.value)} />
      <input placeholder="Lema" onChange={(e) => setLema(e.target.value)} />

      <button onClick={handleSubmit}>Criar Clã</button>
    </div>

    <div className="grid">
      {clas.map((cla) => (
        <div key={cla.id} className="card">
          <div className="card-header">
            <h2>{cla.nome}</h2>
            <span className="elemento">{cla.elemento}</span>
          </div>

          <div className="divider" />

          <p className="lema">“{cla.lema}”</p>
        </div>
      ))}
    </div>
  </div>
);
}
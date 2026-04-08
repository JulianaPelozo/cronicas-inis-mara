import { useEffect, useState } from "react";
import { initDB } from "./services/database";
import Clas from "./pages/Clas";
import "./styles/global.css";
import Personagens from "./pages/Personagens";

export default function App() {
  const [pagina, setPagina] = useState("clas");

  useEffect(() => {
    initDB();
  }, []);

  function renderPagina() {
    switch (pagina) {
      case "clas":
        return <Clas />;
      case "personagens":
        return <Personagens />;
      default:
        return <h1>Página não encontrada</h1>;
    }
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "200px",
          background: "#111",
          padding: "20px",
          borderRight: "1px solid #333",
        }}
      >
        <h2 style={{ color: "#c9a96e" }}>🜃 Inis Mara</h2>

        <button onClick={() => setPagina("clas")}>
           Clãs
        </button>
        <button onClick={() => setPagina("personagens")}>
          Personagens
        </button>
      </aside>

      {/* Conteúdo */}
      <main style={{ flex: 1 }}>
        {renderPagina()}
      </main>
    </div>
  );
}
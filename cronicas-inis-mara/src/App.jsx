import "./App.css";

export default function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2>🜃 Inis Mara</h2>
        <nav>
          <button>Personagens</button>
          <button>Clãs</button>
          <button>Magia</button>
          <button>Eventos</button>
          <button>Mundo</button>
        </nav>
      </aside>

      <main className="main">
        <h1>Crônicas de Inis Mara</h1>
        <p className="subtitle">
          “Vida longa aos bruxos”
        </p>

        <div className="cards">
          <div className="card">
            <h3>Personagens</h3>
            <p>Crie e gerencie seus personagens.</p>
          </div>

          <div className="card">
            <h3>Clãs</h3>
            <p>Organize famílias e alianças.</p>
          </div>

          <div className="card">
            <h3>Magia</h3>
            <p>Defina poderes e limitações.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
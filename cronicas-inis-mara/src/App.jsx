import { useEffect, useState } from "react";
import { initDB } from "./services/database";
import Clas from "./pages/Clas";
import Personagens from "./pages/Personagens";
import Sidebar from "./components/Sidebar";
import { AppLayout, MainContent } from "./components/styles";

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
    <AppLayout>
      <Sidebar currentPage={pagina} onNavigate={setPagina} />
      <MainContent>
        {renderPagina()}
      </MainContent>
    </AppLayout>
  );
}
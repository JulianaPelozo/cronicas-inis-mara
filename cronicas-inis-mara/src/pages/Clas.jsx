import { useState, useEffect } from "react";
import { FaPlus, FaSearch, FaDragon, FaMountain } from "react-icons/fa";
import { criarCla, listarClas } from "../services/clasService";
import { ClaCard } from "../components/Card";
import { 
  PageTitle, FormCard, FormGroup, InputWrapper, InputIcon, 
  InputField, Button, CardGrid, EmptyState 
} from "../components/styles";

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
    <div>
      <PageTitle>🐉 Clãs de Inis Mara</PageTitle>

      <FormCard>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <InputWrapper>
              <InputIcon><FaDragon /></InputIcon>
              <InputField
                placeholder="Nome do clã"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <InputIcon><FaMountain /></InputIcon>
              <InputField
                placeholder="Elemento"
                value={elemento}
                onChange={(e) => setElemento(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <InputIcon><FaSearch /></InputIcon>
              <InputField
                placeholder="Lema"
                value={lema}
                onChange={(e) => setLema(e.target.value)}
              />
            </InputWrapper>
            <Button type="submit">
              <FaPlus /> Criar Clã
            </Button>
          </FormGroup>
        </form>
      </FormCard>

      {clas.length === 0 ? (
        <EmptyState>
          Nenhum clã foi criado ainda. Use o formulário acima para começar.
        </EmptyState>
      ) : (
        <CardGrid>
          {clas.map((cla) => (
            <ClaCard key={cla.id} {...cla} />
          ))}
        </CardGrid>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";
import { FaUser, FaUsers, FaMagic, FaTag, FaPlus } from "react-icons/fa";
import { criarPersonagem, listarPersonagens } from "../services/personagensService";
import { PersonagemCard } from "../components/Card";
import { 
  PageTitle, FormCard, FormGroup, InputWrapper, InputIcon, 
  InputField, Button, CardGrid, EmptyState 
} from "../components/styles";

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
    <div>
      <PageTitle>⚔️ Personagens</PageTitle>

      <FormCard>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <InputWrapper>
              <InputIcon><FaUser /></InputIcon>
              <InputField placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
              <InputIcon><FaUsers /></InputIcon>
              <InputField placeholder="Clã" value={cla} onChange={(e) => setCla(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
              <InputIcon><FaMagic /></InputIcon>
              <InputField placeholder="Magia" value={magia} onChange={(e) => setMagia(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
              <InputIcon><FaTag /></InputIcon>
              <InputField placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
            </InputWrapper>
            <Button type="submit">
              <FaPlus /> Criar Personagem
            </Button>
          </FormGroup>
        </form>
      </FormCard>

      {personagens.length === 0 ? (
        <EmptyState>Nenhum personagem foi criado ainda.</EmptyState>
      ) : (
        <CardGrid>
          {personagens.map((p) => (
            <PersonagemCard key={p.id} {...p} />
          ))}
        </CardGrid>
      )}
    </div>
  );
}
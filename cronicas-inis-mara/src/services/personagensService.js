import { getDB } from "./database";

export async function criarPersonagem(nome, cla, magia, status) {
  const db = getDB();

  await db.execute(
    "INSERT INTO personagens (nome, cla, magia, status) VALUES (?, ?, ?, ?)",
    [nome, cla, magia, status]
  );
}

export async function listarPersonagens() {
  const db = getDB();

  return await db.select("SELECT * FROM personagens");
}
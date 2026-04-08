import { getDB } from "./database";

export async function criarCla(nome, elemento, lema) {
  const db = getDB();

  await db.execute(
    "INSERT INTO clas (nome, elemento, lema) VALUES (?, ?, ?)",
    [nome, elemento, lema]
  );
}

export async function listarClas() {
  const db = getDB();

  return await db.select("SELECT * FROM clas");
}
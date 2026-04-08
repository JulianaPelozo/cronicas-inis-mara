import Database from "@tauri-apps/plugin-sql";

let db;

export async function initDB() {
  db = await Database.load("sqlite:inis_mara.db");

  await db.execute(`
    CREATE TABLE IF NOT EXISTS personagens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      cla TEXT,
      magia TEXT,
      status TEXT
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS clas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      elemento TEXT,
      lema TEXT
    );
  `);
}

export function getDB() {
  return db;
}
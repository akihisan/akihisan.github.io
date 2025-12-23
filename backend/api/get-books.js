import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function handler(req, res) {
    try {
        const db = await open({
            filename: "./db/library.db",
            driver: sqlite3.Database
        });

        const books = await db.all(`
            SELECT * FROM books
        `);

        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

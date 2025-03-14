const express = require("express");
const sqlite3 = require("sqlite3");

const PORT = 3000; // Porta TCP do servidor HTTP da aplicação

const app = express();

const db = new sqlite3.Database("user.db"); // Instância para uso de SQLite3, e usa o arquivo 'user.db'
// Este método permite enviar comandos SQl em modo 'sequencial'
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

// Cria conexão com o banco de dados

const index =
  "<a href='/'>Home</a> <a href='/sobre'>Sobre</a> <a href='/login'>login</a> <a href='/cadastro'>Cadastro</a>";
const sobre = "Você está na página 'sobre'<br><a href='/'>Voltar</a>";
const login = "Você está na página 'login' <br><a href='/'>Voltar</a>";
const cadastro = "Você está na página 'cadastro' <br><a href='/'>Voltar</a>";

/* Método express.get necessita de dois parãmetros
Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
O segundo são os dados que serão enviados ao cliente (RESULT - 'res')
|*/
app.get("/", (req, res) => {
  res.send(index);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/login", (req, res) => {
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  res.send(cadastro);
});

// app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}`);
});

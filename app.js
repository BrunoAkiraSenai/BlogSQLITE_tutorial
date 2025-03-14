const express = require("express");
const sqlite3 = require("sqlite3");

const PORT = 3000;

const app = express();

const db = new sqlite3.Database("user.db");
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)"
  );
});

const index =
  "<a href ='/sobre'>Sobre</a><a href ='/info'>info</a><a href ='/home'>home</a><a href ='/login'>login</a><a href ='/cadrastro'>cadastro</a>";
const sobre = 'vc esta na pagina sobre"<br><a href="/">Voltar</a>';
const info = 'vc esta na pagina info"<br><a href="/">Voltar</a>';
const home = "<a href ='/home'>home</a>";
const login = "<a href ='/login'>login</a>";

const cadastro = "<a href ='/cadastro'>cadastro</a>";

app.get("/", (req, res) => {
  res.send(index);
});

app.get("/cadastro", (req, res) => {
  res.send("vc esta na pagina cadastro");
});

app.get("/home", (req, res) => {
  res.send("vc esta na pagina home");
});

app.get("/login", (req, res) => {
  res.send("vc esta na pagina login");
});

app.get("/sobre", (req, res) => {
  res.send("vc esta na pagina Sobre");
});

app.get("/info", (req, res) => {
  res.send("vc esta na pagina info");
});

// app.listen() deve ser o ultimo comando da aplicação
app.listen(PORT, () => {
  console.log(`servidor sendo executado na porta 3000!)`);
});

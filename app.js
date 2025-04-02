const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
//oi

const PORT = 3000;

const app = express();

const db = new sqlite3.Database("user.db");
// db.serialize(() => {
//   db.run(
//     "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)"
//   );
// });

db.serialize(() => {
  // Este método permite enviar comandos SOL en modo sequencial
  db.run(
    `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 
username TEXT, password TEXT, email TEXT, celular TEXT, Cpf TEXT, rTEXT)`
  );
});

//acrescentado uma tora /static para uma pasta __dirname  + "/static
// //o app é usado para acrescentar toras novas para o express gerencinar "
//Middilewarw paea isto, que neste caso é o express.static que gerencia rotas esteticas
app.use("/static", express.static(__dirname + "/static"));

app.use(bodyParser.urlencoded({ extended: true }));

//motor de vizualização
app.set("view engine", "ejs");

//_dirname é a variavel interna do Node.js que guarda o caminho absoluto do projeto
// console.log(__dirname + "/static");

const index =
  "<a href ='/sobre'>Sobre</a><a href ='/info'>info</a><a href ='/home'>home</a><a href ='/login'>login</a><a href ='/cadrastro'>cadastro</a>";
const sobre = 'vc esta na pagina sobre"<br><a href="/">Voltar</a>';
const info = 'vc esta na pagina info"<br><a href="/">Voltar</a>';
const home = "<a href ='/home'>home</a>";
const login = "<a href ='/login'>login</a>";

const cadastro = "<a href ='/cadastro'>cadastro</a>";

app.post("/login", (rew, res) => {
  res.send("login ainda nao implementado.");
});
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cadastro", (req, res) => {
  res.send("vc esta na pagina cadastro");
});

app.post("/cadastro", (req, res) => {
  req.body
    ? console.log(JSON.stringify(req.body))
    : console.log(`Body vazio: ${reqbody}`);

  res.send(cadastro);

  res.send(
    `Bem-vindo usúario: ${req.body.username}, seu email é ${req.body.email}`
  );
});

app.get("/home", (req, res) => {
  res.send("vc esta na pagina em home");
});

app.get("/login", (req, res) => {
  res.render("login");
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

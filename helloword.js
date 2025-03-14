const express = require("express");

const PORT = 3000;

const app = express();

app;
get("/", (req, res) => {
  res.send("Olá SESI");
});

// app.listen() deve ser o ultimo comando da aplicação
app.listen(PORT, () => {
  console.log(`servidor sendo executado na porta 3000!)`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Implantação efetuada com sucesso.");
});

app.listen(3000, () => {
  console.log(`Aplicação iniciada na porta 3000!`);
});

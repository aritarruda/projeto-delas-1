const express = require("express");
const index = require("./routes/index");
const db = require ("./config/dbConnect");
const app = express();

app.use(express.json());
app.use("/",index);

db.on("error", console.log.bind(console,'erro de conexão'))
db.once("open",() => {
    console.log('conexão com o banco feita com sucesso')
});

module.exports = app;
const express = require("express");
const index = require("./routes/index");
const db = require ("./config/dbConnect.js");
const empreendedoras=require("./models/empreendedoras");
const app = express();

app.use(express.json());
app.use("/",index);
app.use("/empreendedoras", empreendedoras);


db.on("error", console.log.bind(console,'erro de conexão'))
db.once("open",() => {
    console.log('conexão com o banco feita com sucesso')
});

module.exports = app;
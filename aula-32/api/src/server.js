const express = require("express");
const videoRoutes = require("./routes/videoRoutes")

const servidor = express();

servidor.use(videoRoutes);

servidor.get("/", (request,res)=>{
    response.send("ola, bem vindo ao meu servidor")
});

servidor.listen("3000", () =>console.log("servidor rodando..."));
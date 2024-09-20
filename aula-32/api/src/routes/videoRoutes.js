const express = require("express");
const {videos} = require("../mock/dados.json");
const router= express.Router();

router.get("/videos",(request,response) =>{
    if(videos.length == 0) {
        response.status(404).json({mensagem:"nenhum video encontrado"})
    }
    response.status(200).json(videos)
    
});
module.exports = router

router.get("/videos",(request,response) =>{});
router.pust("/videos",(request,response) =>{});
router.put("/videos/:id",(request,response) =>{});
router.delet("/videos/:id",(request,response) =>{});
var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicacao = require('../models').Publicacao;

router.get('/chat_mostrar', function(req, res, next) {
    let idChat = req.query.idChat
    let sql = `select Publicacao.descricao,Usuario.login from Chat inner join Publicacao on 
    idChat=fkChat inner join Usuario on idUsuario=fkUsuario where idChat= ${idChat}`

    sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    }).then(result => {
        res.json(result)
    })

})

router.get('/chat_comentar', function(req, res, next) {
    let descricao = req.query.descricao
    let idUsuario = req.query.idUsuario
    let idChat = req.query.idChat
    let sql = `insert into Publicacao values (null,'${descricao}',${idUsuario},${idChat})`

    sequelize.query(sql, {

        type: sequelize.QueryTypes.SELECT
    }).then(result => {
        res.json(result)
    })

})



module.exports = router;
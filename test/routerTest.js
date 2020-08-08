const express = require('express')
const router = express.Router()
const Erros = require('../models/Erros')
const email = require('../config/email')

router.get('/', (req, res) => {
    res.send('Erro ao Editar:  ')
    Erros.create({
        name: 'erro ao enviar layout ao db',
        desc: 'Erro ao enviar layout headernav para o banco de dados',
        code: 'EEN-1001'
    }).then(() => {
        email.pesquisar()

    })


})



module.exports = router
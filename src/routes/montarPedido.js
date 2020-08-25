const express = require('express')
const router = express.Router()
const Menu = require('../models/Menu')
const { auth } = require('@helper/auth')
const Client = require('../models/Client')
const DataClients = []

router.get('/', auth, (req, res) => {
    // res.render('montarPedido/montarPedido', { DataClients: DataClients })
    // 
    // }
    if (DataClients == false) {
        res.render('montarPedido/montarPedido', {})
    } else {
        for (let DataClient of DataClients) {

            res.render('montarPedido/montarPedido', { bairro: DataClient.bairro, rua: DataClient.rua, residencia: DataClient.residencia })
        }
    }

    // } else if (DataClients == true) {
    //     for (let DataClient of DataClients) {
    //         const bairro = DataClient.bairro
    //         const rua = DataClient.rua
    //         const residencia = DataClient.residencia
    //         res.render('montarPedido/montarPedido', { bairro: bairro, rua: rua, residencia: residencia })
    //     }
    // }
    // for (let DataClient of DataClients) {
    //     if (DataClient.nome == null || DataClient.nome == undefined) {
    //         res.render('montarPedido/montarPedido')
    //         console.log('null')
    //     } else {
    //         const bairro = DataClient.bairro
    //         const rua = DataClient.rua
    //         const residencia = DataClient.residencia
    //         res.render('montarPedido/montarPedido', { bairro: bairro, rua: rua, residencia: residencia })
    //     }
    // }
})

router.post('/', auth, (req, res) => {
    Menu.findAll({ where: { class: req.body.class } }).then((menu) => {
        res.render('montarPedido/montarPedido', { menu: menu })
    })
})


router.post('/cadastrar', auth, (req, res) => {
    Client.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        bairro: req.body.bairro,
        rua: req.body.rua,
        residencia: req.body.residencia
    }).then(() => {
        req.flash('success_msg', 'Cliente Cadastrado com Sucesso!')
        res.redirect('/montarPedido')
    }).catch((err) => {
        res.send(err)
    })
})

router.post('/pesquisar', (req, res) => {
    Client.findAll({ where: { telefone: req.body.telefone } }).then((users) => {
        //res.send(users.values())
        if (users == false) {
            req.flash('error_msg', 'Cliente não Encontrado')
            res.redirect('/montarPedido')
        }
        if (users) {
            for (user of users) {
                //res.send('user:' + user.nome + user.telefone)
                //posibilidade de jogar para a memoria Ram e depois consumir
                //posibilidade de recarregar a pagina
                DataClients.push({
                    id: user.id,
                    nome: user.nome,
                    telefone: user.telefone,
                    bairro: user.bairro,
                    rua: user.rua,
                    residencia: user.residencia
                })
                req.flash('success_msg', 'Cliente Encontrado!')
                res.redirect('/montarPedido')
            }
        }


    }).catch((err) => {
        res.send(err)
    })
})





module.exports = router
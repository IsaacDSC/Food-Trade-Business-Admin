const express = require('express')
const router = express.Router()
const Menu = require('../models/Menu')
const { auth } = require('../helpers/Authenticated')

router.get('/', auth, (req, res) => {
    res.render('montarPedido/montarPedido')
})

router.post('/', auth, (req, res) => {
    Menu.findAll({ where: { class: req.body.class } }).then((menu) => {
            res.render('montarPedido/montarPedido', { menu: menu })
        })
        /*     if (req.body.class == 'Hamburgue') {
                Menu.findAll({ where: { class: 'Hamburgue' } }).then((Burger) => {
                    res.render('montarPedido/montarPedido', { Burger: Burger })
                })
            }
            if (req.body.class == 'Pizza') {
                Menu.findAll({ where: { class: 'Pizza' } }).then((Pizza) => {
                    res.render('montarPedido/montarPedido', { Pizza: Pizza })
                })
            }
            if (req.body.class == 'Bebidas') {
                Menu.findAll({ where: { class: 'Bebidas' } }).then((Bebidas) => {
                    res.render('montarPedido/montarPedido', { Bebidas: Bebidas })
                })
            }
            if (req.body.class == 'Sorvete') {
                Menu.findAll({ where: { class: 'Sorvete' } }).then((Sorvete) => {
                    res.render('montarPedido/montarPedido', { Sorvete: Sorvete })
                })
            }
            if (req.body.class == 'Combos') {
                Menu.findAll({ where: { class: 'Combos' } }).then((Combos) => {
                    res.render('montarPedido/montarPedido', { Combos: Combos })
                })
            }
            if (req.body.class == 'Promocoes') {
                Menu.findAll({ where: { class: 'Promocoes' } }).then((Promocoes) => {
                    res.render('montarPedido/montarPedido', { Promocoes: Promocoes })
                })
            } */
})


router.get('/', auth, (req, res) => {

})





module.exports = router
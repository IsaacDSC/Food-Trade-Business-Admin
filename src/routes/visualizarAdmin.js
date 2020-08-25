const express = require('express')
const router = express.Router()
const { auth } = require('@helper/auth')

//adionando models para carregar a pag visualizar
const HeaderNav = require('../models/HeaderNav')
const History = require('../models/HistoryHome_models')
const Footer = require('../models/Footer_models')
const Slideshow = require('../models/PagHome_Slideshow')
const Contato = require('../models/Contato')
const Menu = require('../models/Menu')
    //adionando models para carregar pagina de cardápios
const CardapioHome = require('../models/CardapiosHome_models')
const MenuBurger = require('../models/MenuBurger')

router.get('/', (req, res) => {
    res.render('vis-admin/vis')
})

router.get('/vis-nav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('vis-admin/vis-nav', { nav: nav })
    }).catch((err) => {
        res.send('Error ao Carregar models header nav na rota vis-headernav ' + err)
    })
})

router.get('/vis-history', (req, res) => {
    History.findOne().then((hisHome) => {
        res.render('vis-admin/vis-history', { hisHome: hisHome })
    }).catch((err) => {
        res.send('Error ao Carregar models header history na rota vis-history' + err)
    })
})

router.get('/vis-footer', (req, res) => {
    Footer.findOne().then((footer) => {
        res.render('vis-admin/vis-footer', { footer: footer })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Footer do banco de dados
        req.flash('error_msg', 'EVFDB-1001')
        res.redirect('/visAdmin/vis-footer')
    })
})

router.get('/vis-slideshow', (req, res) => {
    Slideshow.findOne().then((slideshow) => {
        res.render('vis-admin/vis-slideshow', { slideshow: slideshow })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Slideshow do banco de dados
        req.flash('error_msg', 'EVSDB-1010')
        res.redirect('/visAdmin/vis-slideshow')
    })
})

router.get('/vis-contato', (req, res) => {
    Contato.findOne().then((contato) => {
        res.render('vis-admin/vis-contato', { contato: contato })
    }).catch((err) => {
        res.send('Error' + err)
    })
})

router.get('/vis-menuBurger', (req, res) => {
    MenuBurger.findOne().then((burger) => {
        res.render('vis-admin/vis-menuBurger', { burger: burger })
    }).catch((err) => {
        res.send('error : ' + err)
    })
})

router.get('/vis-cardapiohome', (req, res) => {
    CardapioHome.findOne().then((cardHome) => {
        res.render('vis-admin/vis-cardapiohome', { cardHome: cardHome })
    }).catch((err) => {
        res.send('Error' + err)
    })
})

router.get('/cardapios', (req, res) => {
    res.render('vis-admin/vis-cardapios')
})

router.post('/cardapios', (req, res) => {
    if (req.body.class == 'Hamburgue') {
        Menu.findAll({ where: { class: 'Hamburgue' } }).then((Burger) => {
            res.render('vis-admin/vis-cardapios', { Burger: Burger })
        })
    }
    if (req.body.class == 'Pizza') {
        Menu.findAll({ where: { class: 'Pizza' } }).then((Pizza) => {
            res.render('vis-admin/vis-cardapios', { Pizza: Pizza })
        })
    }
    if (req.body.class == 'Bebidas') {
        Menu.findAll({ where: { class: 'Bebidas' } }).then((Bebidas) => {
            res.render('vis-admin/vis-cardapios', { Bebidas: Bebidas })
        })
    }
    if (req.body.class == 'Sorvete') {
        Menu.findAll({ where: { class: 'Sorvete' } }).then((Sorvete) => {
            res.render('vis-admin/vis-cardapios', { Sorvete: Sorvete })
        })
    }
    if (req.body.class == 'Combos') {
        Menu.findAll({ where: { class: 'Combos' } }).then((Combos) => {
            res.render('vis-admin/vis-cardapios', { Combos: Combos })
        })
    }
    if (req.body.class == 'Promocoes') {
        Menu.findAll({ where: { class: 'Promocoes' } }).then((Promocoes) => {
            res.render('vis-admin/vis-cardapios', { Promocoes: Promocoes })
        })
    }

})

module.exports = router
const express = require('express')
const router = express.Router()
const { auth } = require('../helpers/Authenticated')

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

router.get('/vis-headernav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('vis-admin/vis-headerNav', { layout: 'dashboard.handlebars', nav: nav })
    }).catch((err) => {
        res.send('Error ao Carregar models header nav na rota vis-headernav ' + err)
    })
})

router.get('/vis-history', (req, res) => {
    History.findOne().then((hisHome) => {
        res.render('vis-admin/vis-history', { layout: 'dashboard.handlebars', hisHome: hisHome })
    }).catch((err) => {
        res.send('Error ao Carregar models header history na rota vis-history' + err)
    })
})

router.get('/vis-footer', (req, res) => {
    Footer.findOne().then((footer) => {
        res.render('vis-admin/vis-footer', { layout: 'dashboard.handlebars', footer: footer })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Footer do banco de dados
        req.flash('error_msg', 'EVFDB-1001')
        res.redirect('/visAdmin/vis-footer')
    })
})

router.get('/vis-slideshow', (req, res) => {
    Slideshow.findOne().then((slideshow) => {
        res.render('vis-admin/vis-slideshow', { layout: 'dashboard.handlebars', slideshow: slideshow })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Slideshow do banco de dados
        req.flash('error_msg', 'EVSDB-1010')
        res.redirect('/visAdmin/vis-slideshow')
    })
})

router.get('/vis-contato', (req, res) => {
    Contato.findOne().then((contato) => {
        res.render('vis-admin/vis-contato', { layout: 'dashboard.handlebars', contato: contato })
    }).catch((err) => {
        res.send('Error' + err)
    })
})

router.get('/vis-menuBurger', (req, res) => {
    MenuBurger.findOne().then((burger) => {
        res.render('vis-admin/vis-menuBurger', { layout: 'dashboard.handlebars', burger: burger })
    }).catch((err) => {
        res.send('error : ' + err)
    })
})

router.get('/vis-cardapiohome', (req, res) => {
    CardapioHome.findOne().then((cardHome) => {
        res.render('vis-admin/vis-cardapiohome', { layout: 'dashboard.handlebars', cardHome: cardHome })
    }).catch((err) => {
        res.send('Error' + err)
    })
})

router.get('/cardapios', (req, res) => {
    Menu.findAll().then((menu) => {
        Menu.findAll({ where: { class: 'Hamburgue' } }).then((Burger) => {
            if (Burger == null || Burger == undefined) {
                res.send('Table Burger null or undefined')
            } else {
                res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars' })
            }
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err) => {
        res.send(err)
    })
})
router.post('/cardapios', (req, res) => {
    if (req.body.class == 'Hamburgue') {
        Menu.findAll({ where: { class: 'Hamburgue' } }).then((Burger) => {
            res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars', Burger: Burger })
        })
    }
    if (req.body.class == 'Pizza') {
        Menu.findAll({ where: { class: 'Pizza' } }).then((Pizza) => {
            res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars', Pizza: Pizza })
        })
    }
    if (req.body.class == 'Bebidas') {
        Menu.findAll({ where: { class: 'Bebidas' } }).then((Bebidas) => {
            res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars', Bebidas: Bebidas })
        })
    }
    if (req.body.class == 'Sorvete') {
        Menu.findAll({ where: { class: 'Sorvete' } }).then((Sorvete) => {
            res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars', Sorvete: Sorvete })
        })
    }
    if (req.body.class == 'Combos') {
        Menu.findAll({ where: { class: 'Combos' } }).then((Combos) => {
            res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars', Combos: Combos })
        })
    }
    if (req.body.class == 'Promocoes') {
        Menu.findAll({ where: { class: 'Promocoes' } }).then((Promocoes) => {
            res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars', Promocoes: Promocoes })
        })
    }

})

module.exports = router
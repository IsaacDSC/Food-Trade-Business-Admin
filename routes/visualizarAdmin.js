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

router.get('/vis-headernav', auth, (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('vis-admin/vis-headerNav', { layout: 'dashboard.handlebars', nav: nav })
    }).catch((err) => {
        res.send('Error ao Carregar models header nav na rota vis-headernav ' + err)
    })
})

router.get('/vis-history', auth, (req, res) => {
    History.findOne().then((hisHome) => {
        res.render('vis-admin/vis-history', { layout: 'dashboard.handlebars', hisHome: hisHome })
    }).catch((err) => {
        res.send('Error ao Carregar models header history na rota vis-history' + err)
    })
})

router.get('/vis-footer', auth, (req, res) => {
    Footer.findOne().then((footer) => {
        res.render('vis-admin/vis-footer', { layout: 'dashboard.handlebars', footer: footer })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Footer do banco de dados
        req.flash('error_msg', 'EVFDB-1001')
        res.redirect('/visAdmin/vis-footer')
    })
})

router.get('/vis-slideshow', auth, (req, res) => {
    Slideshow.findOne().then((slideshow) => {
        res.render('vis-admin/vis-slideshow', { layout: 'dashboard.handlebars', slideshow: slideshow })
    }).catch((err) => {
        //Erro ao carregar pagina Visualizar Slideshow do banco de dados
        req.flash('error_msg', 'EVSDB-1010')
        res.redirect('/visAdmin/vis-slideshow')
    })
})

router.get('/vis-contato', auth, (req, res) => {
    Contato.findOne().then((contato) => {
        res.render('vis-admin/vis-contato', { layout: 'dashboard.handlebars', contato: contato })
    }).catch((err) => {
        res.send('Error' + err)
    })
})

router.get('/vis-menuBurger', auth, (req, res) => {
    MenuBurger.findOne().then((burger) => {
        res.render('vis-admin/vis-menuBurger', { layout: 'dashboard.handlebars', burger: burger })
    }).catch((err) => {
        res.send('error : ' + err)
    })
})

router.get('/vis-cardapiohome', auth, (req, res) => {
    CardapioHome.findOne().then((cardHome) => {
        res.render('vis-admin/vis-cardapiohome', { layout: 'dashboard.handlebars', cardHome: cardHome })
    }).catch((err) => {
        res.send('Error' + err)
    })
})

router.get('/cardapios', auth, (req, res) => {
    Menu.findAll().then((menu) => {
        Menu.findAll({ where: { class: 'Hamburgue' } }).then((Burger) => {
            if (Burger == null || Burger == undefined) {
                res.send('Table Burger null or undefined')
            } else {

                res.render('vis-admin/vis-cardapios', { layout: 'dashboard.handlebars', menu: menu, Burger: Burger })
            }
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err) => {
        res.send(err)
    })
})


module.exports = router
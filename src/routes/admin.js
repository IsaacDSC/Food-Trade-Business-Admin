const express = require('express')
const router = express.Router()
const fs = require('fs')
const { auth } = require('@helper/auth')


const folder = 'public/images/'
    //adionando models para carregamento do db nas paginas
const HeaderNav = require('../models/HeaderNav')
const PagHome_slideshow = require('../models/PagHome_Slideshow')
const HistoryHome = require('../models/HistoryHome_models')
const CardapioHome = require('../models/CardapiosHome_models')
const Footer = require('../models/Footer_models')
const Contato = require('../models/Contato')

//adionando models menus cardápios
const MenuBurger = require('../models/MenuBurger')
const menuBebidas = require('../models/MenuBebidas')
const Menu = require('../models/Menu')


router.get('/', auth, (req, res) => {
    res.render('home/home')
})

router.get('/edit-pages', auth, (req, res) => {
    res.render('edit-admin/edit-pages')
})

router.get('/edit-cardapio', auth, (req, res) => {
    res.render('edit-admin/edit-cardapios')
})

router.get('/edit-nav', auth, (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('edit-admin/edit-nav', { nav: nav })
    })
})

router.get('/edit-slideshow', auth, (req, res) => {
    PagHome_slideshow.findOne().then((slideshow) => {
        fs.readdir(folder, (err, paths) => {
            res.render('edit-admin/edit-home', { slideshow: slideshow, paths: paths })
        })
    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

router.get('/edit-history', auth, (req, res) => {
    HistoryHome.findOne().then((history) => {
        fs.readdir(folder, (err, paths) => {
            res.render('edit-admin/edit-history', { history: history, paths: paths })
        })
    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

router.get('/edit-cardapiohome', auth, (req, res) => {
    CardapioHome.findOne().then((cardHome) => {
        res.render('edit-admin/edit-cardapioHome', { cardHome: cardHome })
    }).catch((err) => {
        res.send('Error:  ' + err)
    })
})

router.get('/edit-footer', auth, (req, res) => {
    Footer.findOne().then((footer) => {
        res.render('edit-admin/edit-footer', { footer: footer })
    }).catch((err) => {
        res.send('Erro ao carregar models footer: ' + err)
    })
})

router.get('/edit-contato', auth, (req, res) => {
    Contato.findOne().then((contato) => {
        res.render('edit-admin/edit-contato', { contato: contato })
    }).catch((err) => {
        res.send('Erro ao carregar a pagina edit-contato' + err)
    })
})


router.get('/edit-menuBebidas', auth, (req, res) => {
    menuBebidas.findOne().then((bebidas) => {
        res.render('edit-admin/menuBebidas', { bebidas: bebidas })
    })
})

router.get('/menu', auth, (req, res) => {
        res.render('addbd/addMenu')
    })
    /* router.get('/edit-menuBurger', (req, res) => {
        MenuBurger.findOne().then((burger) => {
            res.render('edit-admin/edit-menuBurger', { layout: 'dashboard.handlebars', burger: burger })
        })
    }) */


router.get('/config', auth, (req, res) => {
    res.render('AdmConfig/config')
})

router.get('/edit-cardapios', auth, (req, res) => {
    res.render('edit-admin/edit-menu')
})

router.post('/edit-cardapio', auth, (req, res) => {
    //res.send(req.body.id)
    Menu.findOne({ where: { id: req.body.id } }).then((menu) => {
        res.render('edit-admin/edit-menu', { menu: menu })
    })
})


module.exports = router
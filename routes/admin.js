const express = require('express')
const router = express.Router()
const fs = require('fs')
const { auth } = require('../helpers/Authenticated')


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

router.get('/', (req, res) => {
    res.render('admin/dashboard')
})

router.get('/edit-pages', (req, res) => {
    res.render('edit-admin/edit-pages')
})

router.get('/edit-cardapio', (req, res) => {
    res.render('edit-admin/edit-cardapios')
})

router.get('/edit-nav', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        res.render('edit-admin/edit-nav')
    })
})

router.get('/edit-home', auth, (req, res) => {
    PagHome_slideshow.findOne().then((slideshow) => {
        fs.readdir(folder, (err, paths) => {
            res.render('edit-admin/edit-home')
        })
    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

router.get('/edit-history', (req, res) => {
    HistoryHome.findOne().then((history) => {
        fs.readdir(folder, (err, paths) => {
            res.render('edit-admin/edit-history')
        })
    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

router.get('/edit-cardapiohome', (req, res) => {
    CardapioHome.findOne().then((cardHome) => {
        res.render('edit-admin/edit-cardapioHome')
    }).catch((err) => {
        res.send('Error:  ' + err)
    })
})

router.get('/edit-footer', (req, res) => {
    Footer.findOne().then((footer) => {
        res.render('edit-admin/edit-footer')
    }).catch((err) => {
        res.send('Erro ao carregar models footer: ' + err)
    })
})

router.get('/edit-contato', (req, res) => {
    Contato.findOne().then((contato) => {
        res.render('edit-admin/edit-contato')
    }).catch((err) => {
        res.send('Erro ao carregar a pagina edit-contato' + err)
    })
})


router.get('/edit-menuBebidas', (req, res) => {
    menuBebidas.findOne().then((bebidas) => {
        res.render('edit-admin/menuBebidas')
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


router.get('/config', (req, res) => {
    res.render('AdmConfig/config')
})

router.get('/edit-cardapios', (req, res) => {
    res.render('edit-admin/edit-menu')
})

router.post('/edit-cardapio', (req, res) => {
    //res.send(req.body.id)
    Menu.findOne({ where: { id: req.body.id } }).then((menu) => {
        res.render('edit-admin/edit-menu')
    })
})


module.exports = router
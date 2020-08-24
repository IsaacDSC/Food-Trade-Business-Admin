const express = require('express')
const router = express.Router()
const { auth } = require('../helpers/Authenticated')
    //configuração para enviar email caso haja erro

//adionando models com info sobre errors para envio futuro de email
const Erros = require('../models/Erros')

//adionando models
const HeaderNav = require('../models/HeaderNav')
const pagHome_slideshow = require('../models/PagHome_Slideshow')
const History = require('../models/HistoryHome_models')
const Footer = require('../models/Footer_models')
const Contato = require('../models/Contato')
const Menu = require('../models/Menu')
    //adionando models menu
const CardapioHome = require('../models/CardapiosHome_models')
const MenuBurger = require('../models/MenuBurger')





router.post('/headernav', auth, (req, res) => {
    HeaderNav.findOne({ id: req.body.id }).then((nav) => {
        nav.logotipo = req.body.logotipo,
            nav.nav1 = req.body.nav1,
            nav.url_nav1 = req.body.url_nav1,
            nav.nav2 = req.body.nav2,
            nav.url_nav2 = req.body.url_nav2,
            nav.nav3 = req.body.nav3,
            nav.subNav3_1 = req.body.subNav3_1
        nav.url_subNav3_1 = req.body.url_subNav3_1,
            nav.subNav3_2 = req.body.subNav3_2
        nav.url_subNav3_2 = req.body.url_subNav3_2,
            nav.subNav3_3 = req.body.subNav3_3,
            nav.url_subNav3_3 = req.body.url_subNav3_3
        nav.nav4 = req.body.nav4,
            nav.nav4_1 = req.body.nav4_1,
            nav.url_subNav4_1 = req.body.url_subNav4_1,
            nav.nav4_2 = req.body.nav4_2,
            nav.url_subNav4_2 = req.body.url_subNav4_2,
            nav.nav5 = req.body.nav5,
            nav.urlNav5 = req.body.urlNav5

        nav.save().then(() => {
            req.flash('success_msg', 'Pagina Editada com Sucesso!')
            res.redirect('/visAdmin/vis-headernav')
        }).cath((err) => {
            Erros.create({
                name: 'Erro ao enviar layout headernav para o banco de dados',
                desc: err,
                code: 'EEN-1001'
            }).then(() => {
                email.pesquisar()
            })
            req.flash('error_msg', ' error: EEN-1001')
            res.send('Erro ao Editar:  ' + err)
        })
    })
})

router.post('/slideshow', auth, (req, res) => {
    pagHome_slideshow.findOne({ id: req.body.id }).then((slideshow) => {
        //primeira parte do form
        slideshow.img1 = req.body.img1,
            slideshow.title1_1 = req.body.title1_1,
            slideshow.title1_2 = req.body.title1_2,
            slideshow.text1_1 = req.body.text1_1,
            slideshow.text1_2 = req.body.text1_2,
            slideshow.btn1 = req.body.btn1,
            slideshow.urlbtn1 = req.body.urlbtn1,
            //segunda parte do form
            slideshow.img2 = req.body.img2,
            slideshow.title2_1 = req.body.tite2_1,
            slideshow.title2_2 = req.body.title2_2,
            slideshow.text2_1 = req.body.text2_1,
            slideshow.text2_2 = req.body.text2_2,
            slideshow.btn2 = req.body.btn2,
            slideshow.urlbtn2 = req.body.urlbtn2,
            //terceira parte do form
            slideshow.img3 = req.body.img3,
            slideshow.title3_1 = req.body.title3_1,
            slideshow.title3_2 = req.body.title3_2,
            slideshow.text3_1 = req.body.text3_1,
            slideshow.text3_2 = req.body.text3_2,
            slideshow.btn3 = req.body.btn3,
            slideshow.urlbtn3 = req.body.urlbtn3,
            //quarta parte do form
            slideshow.iconbtnNext = req.body.iconbtnNext,
            slideshow.iconbtnPrev = req.body.iconbtnPrev

        //editando com a route slideshow
        slideshow.save().then(() => {
            //res.send('Editado com Sucesso!')
            req.flash('success_msg', 'SlideShow Editado com Sucesso!')
            res.redirect('visAdmin/vis-slideshow')
        }).catch((err) => {
            //res.send('Error ao Editar: ' + err)
            req.flash('error_msg', 'Error ao editar os campos, preencha corretamente!')
            res.redirect('visAdmin/vis-slideshow')
        })
    })
})


router.post('/history', auth, (req, res) => {
    History.findOne({ id: req.body.id }).then((history) => {
        history.title1 = req.body.title1,
            history.title2 = req.body.title2,
            history.subtitle = req.body.subtitle,
            history.paragraph1 = req.body.paragraph1,
            history.paragraph2 = req.body.paragraph2,
            history.btnTitle = req.body.btnTitle,
            history.url_btn = req.body.vision_mission,
            history.author = req.body.author

        history.save().then(() => {
            res.send('Editado com Sucesso!')
        }).catch((err) => {
            res.send('Error ao Editar ' + err)
        })

    })
})

router.post('/footer', auth, auth, (req, res) => {
    Footer.findOne({ id: req.body.id }).then((footer) => {
        footer.title1 = req.body.title1,
            footer.describe1 = req.body.describe1,
            footer.Hr_funcionamento = req.body.Hr_funcionamento,
            footer.status_funcionamento = req.body.status_funcionamento,
            footer.feriados_funcionamento = req.body.feriados_funcionamento,
            footer.title3 = req.body.title3,
            footer.endereco_completo = req.body.endereco_completo,
            footer.googlemapslocation = req.body.googlemapslocation,
            footer.urlMaps = req.body.urlMaps,
            footer.number = req.body.number,
            footer.url_number = req.body.url_number,
            footer.email = req.body.email,
            footer.url_email = req.body.email,
            footer.icon_contact1 = req.body.icon_contact1,
            footer.url_icon1 = req.body.url_icon1,
            footer.icon_contact2 = req.body.icon_contact2,
            footer.url_icon2 = req.body.url_icon2,
            footer.icon_contact3 = req.body.icon_contact3,
            footer.url_icon3 = req.body.url_icon3,
            footer.icon_contact4 = req.body.icon_contact4,
            footer.url_icon4 = req.body.url_icon4,
            footer.icon_contact5 = req.body.icon_contact5,
            footer.url_icon5 = req.body.url_icon5,
            footer.title4 = req.body.title4,
            footer.placeholder = req.body.placeholder,
            footer.titlebtn = req.body.titlebtn,
            footer.title5 = req.body.title5,
            footer.desc1 = req.body.desc1,
            footer.imgIcon1 = req.body.imgIcon1,
            footer.title6 = req.body.title6,
            footer.desc2 = req.body.desc2,
            footer.imgIcon2 = req.body.imgIcon2,
            footer.title7 = req.body.title7,
            footer.desc3 = req.body.desc3,
            footer.imgIcon3 = req.body.imgIcon3,

            footer.save().then(() => {
                res.send('Editado com Sucesso!')
            }).catch((err) => {
                res.send('Erro ao Editar ' + err)
            })
    })
})


router.post('/contato', auth, (req, res) => {
    Contato.findOne({ id: req.body.id }).then((contato) => {
        contato.title = req.body.title,
            contato.subtitle = req.body.subtitle,
            contato.desc = req.body.desc,
            contato.placeholder1 = req.body.placeholder1,
            contato.placeholder2 = req.body.placeholder2,
            contato.placeholder3 = req.body.placeholder3,
            contato.placeholder4 = req.body.placeholder4,
            contato.title_btn = req.body.title_btn,

            contato.save().then(() => {
                req.flash('success_msg', 'Pagina Contato Editada com Sucesso!')
                res.redirect('/visAdmin/vis-contato')
            }).catch((err) => {
                req.flash('error_msg', 'Erro ao Editar a Pagina Contato, entre em contato com o administrador')
                res.redirect('/visAdmin/vis-contato')
                    //res.send('error' + err)
            })
    })
})

router.post('/menuBurger', auth, (req, res) => {
    MenuBurger.findOne({ id: req.body.id }).then((burger) => {
        burger.title = req.body.title,
            burger.desc = req.body.desc,
            burger.tabela1 = req.body.tabela1,
            burger.tabela2 = req.body.tabela2,
            burger.tabela3 = req.body.tabela3,
            burger.title1 = req.body.title1,
            burger.desc1 = req.body.desc1,
            burger.valor1 = req.body.valor1,
            burger.title2 = req.body.title2,
            burger.desc2 = req.body.desc2,
            burger.valor2 = req.body.valor2,
            burger.title3 = req.body.title3,
            burger.desc3 = req.body.desc3,
            burger.valor3 = req.body.valor3,
            burger.title4 = req.body.title4,
            burger.desc4 = req.body.desc4,
            burger.valor4 = req.body.valor4,
            burger.title5 = req.body.title5,
            burger.desc5 = req.body.desc5,
            burger.valor5 = req.body.valor5,
            burger.title6 = req.body.title6,
            burger.desc6 = req.body.desc6,
            burger.valor6 = req.body.valor6,
            burger.title7 = req.body.title7,
            burger.desc7 = req.body.desc7,
            burger.valor7 = req.body.valor7,
            burger.title8 = req.body.title8,
            burger.desc8 = req.body.desc8,
            burger.valor8 = req.body.valor8,
            burger.title9 = req.body.title9,
            burger.desc9 = req.body.desc9,
            burger.valor9 = req.body.valor9,
            burger.title10 = req.body.title10,
            burger.desc10 = req.body.desc10,
            burger.valor10 = req.body.valor10,
            burger.title11 = req.body.title11,
            burger.desc11 = req.body.desc11,
            burger.valor11 = req.body.valor11,
            burger.title12 = req.body.title12,
            burger.desc12 = req.body.desc12,
            burger.valor12 = req.body.valor12,
            burger.title13 = req.body.title13,
            burger.desc13 = req.body.desc13,
            burger.valor13 = req.body.valor13,
            burger.title14 = req.body.title14,
            burger.desc14 = req.body.desc14,
            burger.valor14 = req.body.valor14,
            burger.title15 = req.body.title15,
            burger.desc15 = req.body.desc15,
            burger.valor15 = req.body.valor15,

            burger.save().then(() => {
                req.flash('success_msg', 'Menu Hamburger Editado com sucesso!')
                res.redirect('/visAdmin/vis-contato')
            }).catch((err) => {
                //res.send('Error ao editar a pagina ' + err)
                req.flash('error_msg', 'Erro ao editar Pagina Hamburger')
                res.redirect('/visAdmin/vis-contato')
            })

    })
})

router.post('/menu', auth, (req, res) => {
    Menu.create({
        class: req.body.class,
        name: req.body.name,
        desc: req.body.desc,
        valorGasto: req.body.valorGasto,
        valorVenda: req.body.valorVenda,
        lucro: req.body.valorVenda - req.body.valorGasto
    }).then(() => {
        //res.send('Enviado com sucesso')
        req.flash('success_msg', 'Cardápio enviado ao Menu com Sucesso!')
        res.redirect('/visAdmin/cardapios')
    }).catch((err) => {
        //res.send(err)
        req.flash('error_msg', 'Preencha corretamente o campo e tente enviar novamente!')
        res.redirect('/visAdmin/cardapios')
    })
})

router.post('/edit-menu', auth, (req, res) => {
    Menu.findOne({ where: { id: req.body.id } }).then((menu) => {
        menu.name = req.body.name,
            menu.desc = req.body.desc,
            menu.valorGasto = req.body.valorGasto,
            menu.valorVenda = req.body.valorVenda,
            menu.lucro = req.body.valorVenda - req.body.valorGasto,
            menu.save().then(() => {
                //res.send('editado com sucesso')
                req.flash('success_msg', 'Formulário editado com suecesso!')
                res.redirect('/visAdmin/cardapios')
            }).catch((err) => {
                res.send(err)
            })
    })
})

router.post('/delete-cardapio', auth, (req, res) => {
    Menu.findOne({ where: { id: req.body.id } }).then((menu) => {
        menu.destroy().then(() => {
            req.flash('success_msg', 'Formulário deletado com sucesso! com suecesso!')
            res.redirect('/visAdmin/cardapios')
        }).catch((err) => {
            res.send(err)
        })
    })
})

module.exports = router

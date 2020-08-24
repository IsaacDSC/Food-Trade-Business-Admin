const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

const { auth } = require('../helpers/Authenticated')
    //add models HeaderNav
const HeaderNav = require('../models/HeaderNav')
    //add models PagHome_slideshow
const PagHome_slideshow = require('../models/PagHome_Slideshow')
    // add models Footer
const Footer_models = require('../models/Footer_models')
    // add models HistoryHome
const Hystoryhome_models = require('../models/HistoryHome_models')
    //adionando models do cardapio da pagina home
const CardapioHome_models = require('../models/CardapiosHome_models')
    //adionando models da pagina contato
const Contato = require('../models/Contato')
const Usuarios = require('../models/Usuarios')
const Menu = require('../models/Menu')


//adionando Models Menu
const MenuBebidas = require('../models/MenuBebidas')
const MenuBurger = require('../models/MenuBurger')
const MenuPizza = require('../models/MenuPizza')
    //models login admin
const SuperUser = require('../models/SuperUser')




//rota responsável por facilitar o carregamento de dados para o db e carregar o layout para a aplicações
router.get('/', (req, res) => {
    res.render('reset/reset')
})


//pagina responável por carregar layout da navegação
router.get('/headernav', (req, res) => {
    HeaderNav.create({
        logotipo: 'images/logotipo.png',
        nav1: 'inicio',
        url_nav1: '/',
        nav2: 'Menu',
        url_nav2: '/menu',
        nav3: 'Paginas',
        subNav3_1: 'Reservas',
        url_subNav3_1: '#',
        subNav3_2: 'Cardapio',
        url_subNav3_2: '#',
        subNav3_3: 'Galeria',
        url_subNav3_3: '#',
        nav4: 'Login',
        nav4_1: 'Acessar Login',
        url_subNav4_1: '/login',
        nav4_2: 'Cadastre-se',
        url_subNav4_2: '/login/register',
        nav5: 'contato',
        urlNav5: '/contato'

    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao resetar: ' + err)
    })
})

//rota responsavel por carregar layout slideshow da pagina home
router.get('/homeslideshow', (req, res) => {
    PagHome_slideshow.create({
        img1: 'images/slider-01.jpg',
        title1_1: 'Bem vindo ao ',
        title1_2: ' Site Burguer',
        text1_1: 'Texto base usado para o produto.  Texto usado para conseguir a atenção do cliente',
        text1_2: 'Texto usado para conseguir a atenção do cliente',
        btn1: 'Delivery',
        urlbtn1: '/menu',
        img2: 'images/slider-02.jpg',
        title2_1: 'Bem vindo ao ',
        title2_2: ' Site Burguer',
        text2_1: 'Texto base usado para o produto.  Texto usado para conseguir a atenção do cliente',
        text2_2: 'Texto usado para conseguir a atenção do cliente',
        btn2: 'Delivery',
        urlbtn2: '/menu',
        img3: 'images/slider-03.jpg',
        title3_1: 'Bem vindo ao ',
        title3_2: ' Site Burguer',
        text3_1: 'Texto base usado para o produto.  Texto usado para conseguir a atenção do cliente',
        text3_2: 'Texto usado para conseguir a atenção do cliente',
        btn3: 'Delivery',
        urlbtn3: '/menu',
        iconbtnNext: 'fa fa-angle-right',
        iconbtnPrev: 'fa fa-angle-left'
    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao resetar: ' + err)
    })
})

//rota responsável pelo carregamento do layout da parte footer rodapé do site
router.get('/footer', (req, res) => {
    Footer_models.create({
        title1: 'SOBRE NÓS',
        describe1: 'Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui, at ornare turpis ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend arcu ultrices.',
        title2: 'HORÁRIO DE FUNCIONAMENTO',
        Hr_funcionamento: 'De 18 as 00 Hrs',
        status_funcionamento: 'Site disponível 24 horas',
        feriados_funcionamento: 'Funcionamos de Domingo a Domingo',
        title3: 'CONTATO',
        endereco_completo: 'Ipsum Street, Lorem Tower, MO, Columbia, 508000',
        googlemapslocation: 'google maps location5',
        urlMaps: 'https://www.google.com.br/maps/place/R.+Lu%C3%ADs+Valiante+-+Vila+Orlandelia,+Barra+Mansa+-+RJ/@-22.5379816,-44.1607552,17z/data=!3m1!4b1!4m5!3m4!1s0x9e9943c586dfb3:0xd1b8825db54700ed!8m2!3d-22.5377632!4d-44.1585284',
        number: '(XX)000000000',
        url_number: 'https://web.whatsapp.com/',
        email: 'info@admin.com',
        url_email: 'https://outlook.live.com/mail/0/inbox',
        icon_contact1: '',
        url_icon1: '',
        icon_contact2: '',
        url_icon2: '',
        icon_contact3: '',
        url_icon3: '',
        icon_contact4: '',
        url_icon4: '',
        icon_contact5: '',
        url_icon5: '',
        title4: 'CADASTRE E RECEBA AS PROMOSSÕES',
        placeholder: 'SUBSCRIBE',
        titlebtn: 'SUBSCRIBE',
        title5: 'Phone',
        desc1: '+55 0800 4512 3254',
        imgIcon1: '',
        title6: 'E-mail',
        desc2: 'seuemail@hotamil.com',
        imgIcon2: '',
        title7: 'Localização',
        desc3: 'seuemail@hotamil.com',
        imgIcon3: 'rua: x | n°: 0000 | Bairro | Cidade/Rj | Cep: 00000-000'

    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao Resetar: ' + err)
    })
})

//rota responsavel pelo carregamento do layout da pagina home área litlle history
router.get('/history', (req, res) => {
        Hystoryhome_models.create({
            title1: 'Bem vindo ao',
            title2: 'Site Burguer',
            subtitle: 'Little Story',
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.',
            paragraph2: 'Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.',
            images: '/images/about-img.jpg',
            btnTitle: 'DELIVERY',
            url_btn: '/menu',
            vision_mission: '" Visão e missão da empresa..... "',
            author: 'Site Burguer',

        }).then(() => {
            res.send('Pagina Resetada Com Sucesso!')
        }).catch((err) => {
            res.send('Error ao Resetar: ' + err)
        })
    })
    // falta colocar url 2,3,4!!!!!!!!!!!!!!!!!
    //rota responsavel por carregar menu da pagina inicial home para ser como um anuncio de propagandas e combos, layout client para poder testar a aplicação
router.get('/cardapiohome', (req, res) => {
    CardapioHome_models.create({
        title: 'Promoções do Cardápio',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        nav2: 'BEBIBDAS',
        img2_1: 'img-01.jpg',
        title2_1: 'Mantiqueira 2L',
        desc2_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor2_1: ' R$ 8,00',
        img2_2: 'img-02.jpg',
        title2_2: 'Coca Lata',
        desc2_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor2_2: ' R$ 5,00',
        img2_3: 'img-03.jpg',
        title2_3: 'Ativ plus',
        desc2_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor2_3: ' R$ 2,00',
        nav3: 'LANCHES',
        img3_1: 'img-04.jpg',
        title3_1: 'Special Lunch 1',
        desc3_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor3_1: ' R$ 2,00',
        img3_2: 'img-05.jpg',
        title3_2: 'Special Lunch 2',
        desc3_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor3_2: ' R$ 2,00',
        img3_3: 'img-06.jpg',
        title3_3: 'Special Lunch 3',
        desc3_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor3_3: ' R$ 2,00',
        nav4: 'COMBOS',
        img4_1: 'img-07.jpg',
        title4_1: 'Special Dinner 1',
        desc4_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor4_1: ' R$ 2,00',
        img4_2: 'img-08.jpg',
        title4_2: 'Special Dinner 2',
        desc4_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor4_2: ' R$ 2,00',
        img4_3: 'img-09.jpg',
        title4_3: 'Special Dinner 3',
        desc4_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor4_3: ' R$ 2,00',
    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Erro ao Resetar Pagina : ' + err)
    })
})

//rota responsavel por carregar menuburger, layout client para poder testar a aplicação
router.get('/menuburger', (req, res) => {
    MenuBurger.create({
        title: 'BURGUER RESTAURANTE',
        desc: 'Todos os produtos são de extrema qualidade e confiabilidade, tratados e seguindo um rigoroso padão de qualidade. Compre sem medo.',
        tabela1: 'Item',
        tabela2: 'Valor',
        tabela3: 'Alteração',
        title1: 'X-Tudo',
        title2: 'X-salada-Bacon',
        title3: 'X-Bacon',
        title4: 'X-Salada',
        title5: 'X-Burger',
        title6: 'X-Egg-Bacon',
        title7: 'X-Egg-Burger',
        title8: 'X-Parmegiana',
        title9: 'X-Parmegiana',
        title10: 'X-Frango-Catupiry',
        title11: 'Frango Tudo',
        title12: 'Hamburger',
        title13: 'X-Tudo Duplo',
        title14: 'X-Alguma-Coisa',
        title15: 'X-Alguma-Coisa',
        desc1: 'Pão, carne bovina , presunto, maionese, queijo prato, alface, tomate, ovo, bacon, milho, batata palha ou frita e molho gourmet especial. Acompanha molho verde.',
        desc2: 'Pão, carne bovina , presunto, maionese, queijo prato, alface, tomate, bacon, milho, batata palha ou frita e molho gourmet especial. Acompanha molho verde.',
        desc3: 'Pão, carne bovina , presunto, maionese, queijo prato, bacon, milho, batata palha ou frita e molho gourmet especial. Acompanha molho verde.',
        desc4: 'Pão, carne bovina , presunto, maionese, queijo prato, alface, tomate, milho, batata palha ou frita e molho gourmet especial. Acompanha molho verde.',
        desc5: 'Pão, carne bovina , presunto, maionese, queijo prato, milho, batata palha ou frita e molho gourmet especial. Acompanha molho verde.',
        desc6: 'Pão, carne bovina , presunto, maionese, queijo prato, bacon, ovo, milho, batata palha ou frita e molho gourmet especial. Acompanha molho verde.',
        desc7: 'Pão, carne bovina , presunto, maionese, queijo prato, ovo, milho, batata palha ou frita e molho gourmet especial. Acompanha molho verde.',
        desc8: 'Contra filé, queijo , presunto,pomarola, maionese , alface , tomate , milho , queijo parmessão e batata frita',
        desc9: 'Contra filé, queijo , presunto,pomarola, maionese , alface , tomate , milho , queijo parmessão e batata frita',
        desc10: 'Frango desfiado com Catupiry, queijo, presunto, milho, molho especial e batata frita',
        desc11: 'Peito de frango grelhado, queijo , presunto , maionese , ovo, milho , molho especial , batata frita',
        desc12: 'Pão, carne bovina , presunto, maionese, milho, batata palha e molho gourmet especial. Acompanha molho verde.',
        desc13: '2 carnes , 2 ovos, 2 queijos , 2 presunto, dobro bacon, alface ,tomate , milho , molho especial, batata frita .',
        desc14: '2 carnes goumet Picanha 120 g , queijo cheedar, alface, tomate , cebola roxa , molho especial e batata frita .',
        desc15: '2 carnes goumet Picanha 120 g , queijo cheedar, alface, tomate , cebola roxa , molho especial e batata frita .',
        valor1: '11.98',
        valor2: '11.98',
        valor3: '11.98',
        valor4: '11.98',
        valor5: '11.98',
        valor6: '11.98',
        valor7: '11.98',
        valor8: '11.98',
        valor9: '11.98',
        valor10: '11.98',
        valor11: '11.98',
        valor12: '11.98',
        valor13: '11.98',
        valor14: '11.98',
        valor15: '11.98',
        title_option: 'Escolha um tipo de Carne',
        opt1: 'Bovina',
        valor_opt1: '0.00',
        opt2: 'Frango',
        valor_opt2: '2.00',
        opt3: 'Suína',
        valor_opt3: '2.50',
        title_option1_1: 'Escolha o tipo de Batata',
        opt1_1: 'Batata-Palha',
        valor_opt1_1: '0.50',
        opt2_1: 'Batata-Frita',
        valor_opt2_1: '1.00'

    }).then(() => {
        res.send('Pagina Resetada com Sucesso!')
    }).catch((err) => {
        res.send('Erro ao Resetar : ' + err)
    })
})

//rota responsavel por carregar menubebidas, layout client para poder testar a aplicação
router.get('/menubebidas', (req, res) => {
    MenuBebidas.create({
        title: 'BEBIDAS',
        desc: 'Todos os produtos são de extrema qualidade e confiabilidade, tratados e seguindo um rigoroso padão de qualidade. Compre sem medo.',
        tabela1: 'Item',
        tabela2: 'Valor',
        tabela3: 'Alteração',
        title1: 'Coca-Lata 0.33L',
        desc1: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor1: '4.00',
        title2: 'Coca-Lata zero 0.33L',
        desc2: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor2: '4.00',
        title3: 'Coca-cola 600ml',
        desc3: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor3: '6.00',
        title4: 'Fanta-Laranja 0.33L',
        desc4: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor4: '4.00',
        title5: 'H2O 600ml',
        desc5: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor5: '8.00',
        title6: 'Ativ-Plus',
        desc6: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor6: '1.20',
        title7: 'Mantiqueira 2L',
        desc7: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor7: '6.00',
        title8: 'Coca-cola 2l',
        desc8: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        valor8: '10.00'
    }).then(() => {
        res.send('Pagina Resetada com Sucesso!')
    }).catch((err) => {
        res.send('Erro ao Resetar ' + err)
    })
})

//rota responsavel por carregar menupizza, layout client para poder testar a aplicação
router.get('/menupizzas', (req, res) => {
    MenuPizza.create({
        title: 'Best Pizzas',
        desc: 'Todos os produtos são de extrema qualidade e confiabilidade, tratados e seguindo um rigoroso padão de qualidade. Compre sem medo.',
        tabela1: 'Item',
        tabela2: 'Valor',
        tabela3: 'Alteração',
        title1: 'MUSSARELA - ESPECIALIDADES',
        desc1: 'QUEIJO, MUSSARELA E ORÉGANO',
        valor1: '30,95',
        title2: 'MARGHERITA - ESPECIALIDADES',
        desc2: 'MUSSARELA, TOMATE, MANJERICÃO E ORÉGANO',
        valor2: '30,00',
        title3: 'PEPPERONI - ESPECIALIDADES',
        desc3: 'MUSSARELA, PEPPERONI E OREGANO',
        valor3: '30,95',
        title4: 'FRANGO COM REQUEIJÃO - ESPECIALIDADES',
        desc4: 'FRANGO DESFIADO, REQUEIJÃO E CEBOLA',
        valor: '30,00',
        title5: 'VENEZA',
        desc5: 'MOLHO, MUSSARELA, CATUPIRY, TOMATE, AZEITONA E ORÉGANO',
        valor5: '32,00',
        title6: 'CARIOCA',
        desc6: 'MOLHO, MUSSARELA, OVO, MILHO, TOMATE, AZEITONA, E ORÉGANO',
        valor6: '31,90',


    }).then(() => {
        res.send('Pagina resetada com sucesso!')
    }).catch((err) => {
        res.send('error ao resetar a pagina: ' + err)
    })
})

//rota responsavel por adionar layout da pagina de contato do servidor client
router.get('/contato', (req, res) => {
    Contato.create({
        title: 'Seja Bem Vindo a Pagina de Cotato!',
        subtitle: 'Contato',
        desc: 'Ajudenos a melhorar a cada dia!!!',
        placeholder1: 'Digite seu nome completo',
        placeholder2: 'Digite seu E-mail',
        placeholder3: '',
        placeholder4: 'Escreva sua mensagem...',
        title_btn: 'Enviar Mensagem',
    }).then(() => {
        res.send('Pagina resetada com sucesso!')
    }).catch((err) => {
        res.send('Erro ao resetar a pagina: ' + err)
    })
})

//rota responsavel por cadastrar SuperUser Admin do siste
router.get('/SuperUser', (req, res) => {
    const senha = 'Iagent*123'
    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(senha, salt, (err, hash) => {
            if (err) {
                res.send('Erro ao Criptografar esta Senha: ' + err)
            } else {
                const pwd = hash
                SuperUser.create({
                    nome: 'Administrador da Casa',
                    email: 'admin@gmail.com',
                    password: pwd
                }).then(() => {
                    res.send('Admin cadastrado com sucesso!')
                }).catch((err) => {
                    res.send(err)
                })
            }
        })
    })
})

//rota responsável por cadastrar client teste aplication
router.get('/userClients', (req, res) => {
    const senha = '123456'
    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(senha, salt, (err, hash) => {
            if (err) {
                res.send('Error in crypto the password')
            } else {
                const pwd = hash
                Usuarios.create({
                    nome: ' anonimus',
                    email: 'isaac8.silva@hotmail.com',
                    password: pwd,
                    telefone: '988180688',
                    bairro: 'ano bom',
                    rua: 'ano bom',
                    residencia: '777',
                    complemento: 'casa 2, final da rua'
                }).then(() => {
                    res.send('Client Tester create successfull!')
                }).catch((err) => {
                    res.send(err)
                })
            }
        })
    })

})


module.exports = router;
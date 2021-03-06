require('module-alias/register')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
require('@config/Authenticated')(passport)


//adionando login Administrador Site
const superUser = require('@routes/superUser')
    //adicionando tela de adm
const admin = require('@routes/admin')
    //adionando router visAdmin
const visualizarAdmin = require('@routes/visualizarAdmin')
    //adionando router addBd com todas as rotas post para adionar ao  banco de dados
const addBd = require('@routes/addBd')
    //rota responsável por carregar e subir imagems para o servidor carregas na paginas client
const uploafiles = require('@routes/uploadFiles')
    //adionando rota responsável por resetar a pagina dinamicamente do servidor da aplicação client
const reset = require('@routes/reset')
    //route responsável por fazer montar pedido no dashboard
const montarPedido = require('@routes/montarPedido')
    //route para configurar os dados da primeira vez
const config = require('@routes/tecnico')



//configurando body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set("views", path.join(__dirname, "/views/")) //resolvendo problema, direcionando views para dentro de src
    //adionando pasta public
app.use(express.static(path.join(__dirname, 'public')))
    //configurando a sessao
app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    //configurando passport
app.use(passport.initialize())
app.use(passport.session())
    //configurando flash
app.use(flash())
    //configurando midleware flash
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.message = req.flash('message')
    next()
})

app.use('/admin', admin)
app.use('/superuser', superUser)
app.use('/visAdmin', visualizarAdmin)
app.use('/addbd', addBd)
app.use('/uploadfiles', uploafiles)
app.use('/reset', reset)
app.use('/montarPedido', montarPedido)
app.use('/', config)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} `)
    console.log('BREAK SERVER ctrl + c')
})
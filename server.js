const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
require('./config/auth')(passport)


//adionando login Administrador Site
const superUser = require('./routes/superUser')
    //adicionando tela de adm
const admin = require('./routes/admin')

//configurando body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} `)
    console.log('BREAK SERVER ctrl + c')
})
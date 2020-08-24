module.exports = {
    auth: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        } else {
            req.flash('error_msg', 'Necessário realizar o login para acessar a pagina solicitada!')
            res.redirect('/superUser')
        }
    }
}

/* function auth(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    } else {
        req.flash('error_msg', 'Necessário realizar o login para acessar a pagina solicitada!')
        res.redirect('/superUser')
    }
}
module.exports = {
    auth,
} */
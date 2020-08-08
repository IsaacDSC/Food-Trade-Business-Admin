const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('login/loginAdmin', { layout: 'login_register.handlebars' })
})


router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/superuser',
        failureFlash: true,
    })(req, res, next)
})




module.exports = router
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('', { layout: 'dashboard.handlebars' })
})


module.exports = router
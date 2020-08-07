const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('montarPedido/montarPedido')
})


module.exports = router
const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const getCrypto = require('../config/Crypt and Decrypt/Crypto')
const JSON = require('../config/JSON/Json')


///objetivo apresentar uma interfacil amigavel 
router.get('/', (req, res) => {
    res.render('config/config', { layout: 'config.handlebars' })
})

router.post('/', (req, res) => {
    const id = Math.random().toString(32).substr(2, 9)
    const encrypt = value => {
        const iv = Buffer.from(crypto.randomBytes(16))
        const cipher = crypto.createCipheriv(getCrypto.getCrypto().alg, Buffer.from(getCrypto.getCrypto().pwd), iv)
        let encrypted = cipher.update(value)
        encrypted = Buffer.concat([encrypted, cipher.final()])
        return `${iv.toString('hex')}:${encrypted.toString('hex')}`
    }

    const DataBase = encrypt(req.body.dataBase)
    const User = encrypt(req.body.user)
    const PassWord = encrypt(req.body.pwd)
    const Host = encrypt(req.body.host)

    const currentContent = JSON.readFile()
    currentContent.push({ id, DataBase, User, PassWord, Host })
    JSON.writeFile(currentContent)

    res.redirect('/admin')
})


module.exports = router
const Errors = require('../models/Erros')
const email = require('../config/email')

var name = 'error'
var desc = 'error para teste'
var code = 'ETEST1001'

Errors.create({
    name: name,
    desc: desc,
    code: code
}).then(() => {
    console.log('Erros enviado com sucesso ao banco de dados')
}).catch((err) => {
    console.log(err)
})

Errors.findOne({
    order: [
        ['id', 'DESC']
    ]
}).then((erros) => {
    console.log(erros.id)
        /* for (erro of erros) {
            console.log(erro.id)
            console.log(erro.name)
        } */
})
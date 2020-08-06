const crypto = require('crypto')
const { read } = require('fs')


const dadosCrypt = {
    senha: 'secret',
    alg: 'aes-256-ctr',
    pwd: '!@#(!1!2!3!)',
    type: 'hex'
}

function crypt(senha) {
    const cipher = crypto.createCipher(dadosCrypt.alg, dadosCrypt.pwd)
    cipher.update(senha)
    return cipher.final(dadosCrypt.type)
}
console.log(crypt())
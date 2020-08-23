// const crypto = require('crypto')
// const { read } = require('fs')


// const dadosCrypt = {
//     senha: 'secret',
//     alg: 'aes-256-ctr',
//     pwd: '!@#(!1!2!3!)',
//     type: 'hex'
// }

// function crypt(senha) {
//     const cipher = crypto.createCipher(dadosCrypt.alg, dadosCrypt.pwd)
//     cipher.update(senha)
//     return cipher.final(dadosCrypt.type)
// }
// console.log(crypt())
const fs = require('fs')
const crypto = require('crypto')

const alg = 'aes-256-cbc'
const pwd = 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'

const encrypt = value => {
    const iv = Buffer.from(crypto.randomBytes(16))
    const cipher = crypto.createCipheriv(alg, Buffer.from(pwd), iv)
    let encrypted = cipher.update(value)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}

console.log(encrypt('Isaac'))



//configurando JSON
const readFile = () => {
    const content = fs.readFileSync('../data/db.json', 'utf-8')
    return JSON.parse(content)
}

const decprypt = value => {
    const [iv, encrypted] = value.split(':')
    const ivBuffer = Buffer.from(iv, 'hex')
    const decipher = crypto.createDecipheriv(alg, Buffer.from(pwd), ivBuffer)
    let decrypted = decipher.update(Buffer.from(encrypted), 'hex')
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}

const conteudos = readFile()
for (conteudo of conteudos) {
    var HA = conteudo.DataBase

}

const haha = decprypt(HA)
console.log(haha)
    //console.log(decrypt(HA))
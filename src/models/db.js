require('module-alias/register');
const crypto = require('crypto')
const getCrypto = require('@Crypto')
const JSON = require('@Config_Json')

JSON.readFile()

const decprypt = value => {
    //console.log(value.split(':'))
    const [iv, encrypted] = value.split(':')
    const ivBuffer = Buffer.from(iv, 'hex')
    const decipher = crypto.createDecipheriv(getCrypto.getCrypto().alg, Buffer.from(getCrypto.getCrypto().pwd), ivBuffer)
    let content = decipher.update(Buffer.from(encrypted, 'hex'))
    content += Buffer.concat([content, decipher.final()])
    return content.toString()
}

const contents = JSON.readFile()
for (content of contents) {
    //const decprypt = decprypt(content.DataBase)
    console.log(content.DataBase)
    var database = content.DataBase
    var user = content.User
    var password = content.PassWord
    var host = content.Host
}

const Database = decprypt(database)
const User = decprypt(user)
const PassWord = decprypt(password)
const Host = decprypt(host)


const Sequelize = require('sequelize')
const sequelize = new Sequelize(Database, User, PassWord, {
    host: Host,
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('Conectado com Sucesso')
}).catch(function(erro) {
    //chamar função e enviar error para email
    console.log('Erro ao se conectar' + erro)
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
const Sequelize = require('sequelize')
const sequelize = new Sequelize('ftb', 'dev', 'secret', {
    host: 'localhost',
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
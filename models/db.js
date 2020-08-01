const Sequelize = require('sequelize')
const sequelize = new Sequelize('ftb', 'dev', 'secret123', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate().then(function() {
    console.log('Conectado com Sucesso')
}).catch(function(erro) {
    console.log('Erro ao se conectar' + erro )
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
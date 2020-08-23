const db = require('./db')

const Client = db.sequelize.define('cliente', {
    nome: {
        type: db.Sequelize.STRING,
        require: true
    },
    telefone: {
        type: db.Sequelize.STRING,
        require: true,
        unique: true
    },
    bairro: {
        type: db.Sequelize.STRING,
        require: true
    },
    rua: {
        type: db.Sequelize.STRING,
        require: true
    },
    residencia: {
        type: db.Sequelize.STRING,
        require: true
    }


})

//Client.sync({ force: true })

module.exports = Client
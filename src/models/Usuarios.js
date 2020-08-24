const db = require('./db')

const Usuarios = db.sequelize.define('usuario', {
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    email: {
        type: db.Sequelize.STRING(150),
        unique: true,
        require: true
    },
    password: {
        type: db.Sequelize.STRING,
        require: true
    },
    telefone: {
        type: db.Sequelize.INTEGER,
        require: true
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
        type: db.Sequelize.INTEGER,
        require: true
    },
    complemento: {
        type: db.Sequelize.TEXT,
        require: true
    }

})

//Usuarios.sync({ force: true })

module.exports = Usuarios
const db = require('./db')

const ContatoPost = db.sequelize.define('Contato', {
        nome: {
            type: db.Sequelize.STRING(60),
            require: true
        },
        email: {
            type: db.Sequelize.STRING(220),
            require: true
        },
        nota: {
            type: db.Sequelize.INTEGER(1),
            require: true
        },
        menssagem: {
            type: db.Sequelize.TEXT,
            require: true
        }

    })
    //criando tables models contato post
    //ContatoPost.sync({ force: true })

module.exports = ContatoPost
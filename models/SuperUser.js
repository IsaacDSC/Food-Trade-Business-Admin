const db = require('./db')

const SuperUser = db.sequelize.define('superuser', {
        nome: {
            type: db.Sequelize.STRING(60),
            require: true
        },
        email: {
            type: db.Sequelize.STRING,
            require: true
        },
        password: {
            type: db.Sequelize.STRING,
            require: true
        }
    })
    //create models table
    //SuperUser.sync({ force: true })


module.exports = SuperUser
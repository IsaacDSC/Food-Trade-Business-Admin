const db = require('./db')

const Errors = db.sequelize.define('error', {
    name: {
        type: db.Sequelize.STRING,
    },
    desc: {
        type: db.Sequelize.TEXT,
    },
    code: {
        type: db.Sequelize.STRING
    }
})

//Errors.sync({ force: true })
module.exports = Errors
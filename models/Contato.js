const db = require('./db')

const Contato = db.sequelize.define('PagContato', {
    title: {
        type: db.Sequelize.STRING,
        require: true
    },
    subtitle: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc: {
        type: db.Sequelize.STRING,
        require: true
    },
    placeholder1: {
        type: db.Sequelize.STRING,
        require: true
    },
    placeholder2: {
        type: db.Sequelize.STRING,
        require: true
    },
    placeholder3: {
        type: db.Sequelize.STRING,
        require: true
    },
    placeholder4: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_btn: {
        type: db.Sequelize.STRING(32),
        require: true
    }
})

//create table models Pagina Contato
//Contato.sync({ force: true })

module.exports = Contato
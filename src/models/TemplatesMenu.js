const db = require('./db')

const TemplateMenu = db.sequelize.define('TemplateMenu', {
    class: {
        type: db.Sequelize.STRING,
            require: true
    },
    title: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc: {
        type: db.Sequelize.TEXT,
        require: true
    }


})

//TemplateMenu.sync({ force: true })

module.exports = TemplateMenu
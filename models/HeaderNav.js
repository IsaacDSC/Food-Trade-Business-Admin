const db = require('./db')

const HeaderNav = db.sequelize.define('headerNav', {
    logotipo: {
        type: db.Sequelize.STRING,
        require: true
    },
    nav1: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_nav1: {
        type: db.Sequelize.STRING,
        require: true
    },
    nav2: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_nav2: {
        type: db.Sequelize.STRING,
        require: true
    },
    nav3: {
        type: db.Sequelize.STRING,
        require: true
    },
    subNav3_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_subNav3_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    subNav3_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_subNav3_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    subNav3_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_subNav3_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    nav4: {
        type: db.Sequelize.STRING,
        require: true
    },
    nav4_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_subNav4_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    nav4_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_subNav4_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    nav5: {
        type: db.Sequelize.STRING,
        require: true
    },
    urlNav5: {
        type: db.Sequelize.STRING,
        require: true
    }

})

//Criando table
//HeaderNav.sync({ force: true })


module.exports = HeaderNav
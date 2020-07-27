const db = require('./db')


const MenuBurger = db.sequelize.define('menu_bebidas', {
    title: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc: {
        type: db.Sequelize.STRING,
        require: true
    },
    tabela1: {
        type: db.Sequelize.STRING,
        require: true
    },
    tabela2: {
        type: db.Sequelize.STRING,
        require: true
    },
    tabela3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title4: {
        type: db.Sequelize.STRING,
        require: true
    },
    title5: {
        type: db.Sequelize.STRING,
        require: true
    },
    title6: {
        type: db.Sequelize.STRING,
        require: true
    },
    title7: {
        type: db.Sequelize.STRING,
        require: true
    },
    title8: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc1: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc2: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc3: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc4: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc5: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc6: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc7: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc8: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor1: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor2: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor3: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor4: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor5: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor6: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor7: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor8: {
        type: db.Sequelize.FLOAT,
        require: true
    },
})

//create table(model)
//MenuBurger.sync({ force: true })

module.exports = MenuBurger
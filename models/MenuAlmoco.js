const db = require('./db')


const MenuAlmoco = db.sequelize.define('menu_Almoco', {
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
    title9: {
        type: db.Sequelize.STRING,
        require: true
    },
    title10: {
        type: db.Sequelize.STRING,
        require: true
    },
    title12: {
        type: db.Sequelize.STRING,
        require: true
    },
    title12: {
        type: db.Sequelize.STRING,
        require: true
    },
    title13: {
        type: db.Sequelize.STRING,
        require: true
    },
    title14: {
        type: db.Sequelize.STRING,
        require: true
    },
    title15: {
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
    desc9: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc10: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc11: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc12: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc13: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc14: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc15: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor1: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor2: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor3: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor4: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor5: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor6: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor7: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor8: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor9: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor10: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor11: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor12: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor13: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor14: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor15: {
        type: db.Sequelize.STRING,
        require: true
    }
})

//create table(model)
//MenuAlmoco.sync({ force: true })

module.exports = MenuAlmoco
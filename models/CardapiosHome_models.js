const db = require('./db')

const CadapioHome_models = db.sequelize.define('cardapioHome_pag', {
    title: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    subtitle: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    nav2: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    img2_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title2_1: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc2_1: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor2_1: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img2_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title2_2: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc2_2: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor2_2: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img2_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title2_3: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc2_3: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor2_3: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    nav3: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    img3_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title3_1: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc3_1: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor3_1: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img3_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title3_2: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc3_2: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor3_2: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img3_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title3_3: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc3_3: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor3_3: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    nav4: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    img4_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title4_1: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc4_1: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor4_1: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img4_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title4_2: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc4_2: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor4_2: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img4_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title4_3: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc4_3: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor4_3: {
        type: db.Sequelize.STRING(40),
        require: true
    }

})

//create table
//CadapioHome_models.sync({ force: true })

module.exports = CadapioHome_models
const db = require('./db')

const PagHome = db.sequelize.define('pagHome_slideshow', {
    img1: {
        type: db.Sequelize.STRING,
        require: true,
    },
    title1_1: {
        type: db.Sequelize.STRING,
        require: true,
    },
    title1_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    text1_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    text1_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    btn1: {
        type: db.Sequelize.STRING(60),
        require: true,
    },
    urlbtn1: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    img2: {
        type: db.Sequelize.STRING,
        require: true,
    },
    title2_1: {
        type: db.Sequelize.STRING,
        require: true,
    },
    title2_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    text2_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    text2_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    btn2: {
        type: db.Sequelize.STRING(60),
        require: true,
    },
    urlbtn2: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    img3: {
        type: db.Sequelize.STRING,
        require: true,
    },
    title3_1: {
        type: db.Sequelize.STRING,
        require: true,
    },
    title3_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    text3_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    text3_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    btn3: {
        type: db.Sequelize.STRING(60),
        require: true,
    },
    urlbtn3: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    iconbtnNext: {
        type: db.Sequelize.STRING,
        require: true
    },
    iconbtnPrev: {
        type: db.Sequelize.STRING,
        require: true
    }

})

//create table
//PagHome.sync({ force: true })

module.exports = PagHome
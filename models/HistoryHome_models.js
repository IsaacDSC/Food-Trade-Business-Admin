const db = require('./db')

const HistoryHome_models = db.sequelize.define('hystoryhomepag', {
    title1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title2: {
        type: db.Sequelize.STRING,
        require: true
    },
    subtitle: {
        type: db.Sequelize.STRING,
        require: true
    },
    paragraph1: {
        type: db.Sequelize.STRING,
        require: true
    },
    paragraph2: {
        type: db.Sequelize.STRING,
        require: true
    },
    images: {
        type: db.Sequelize.STRING,
        require: true
    },
    btnTitle: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_btn: {
        type: db.Sequelize.STRING,
        require: true
    },
    vision_mission: {
        type: db.Sequelize.STRING,
        require: true
    },
    author: {
        type: db.Sequelize.STRING,
        require: true
    }
})

//create table
//HistoryHome_models.sync({ force: true })

module.exports = HistoryHome_models
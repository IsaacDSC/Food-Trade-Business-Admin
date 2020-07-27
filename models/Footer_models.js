const db = require('./db')

const Footer_models = db.sequelize.define('footer', {
    title1: {
        type: db.Sequelize.STRING,
        require: true
    },
    describe1: {
        type: db.Sequelize.TEXT,
        require: true
    },
    title2: {
        type: db.Sequelize.STRING,
        require: true
    },
    Hr_funcionamento: {
        type: db.Sequelize.STRING,
        require: true
    },
    status_funcionamento: {
        type: db.Sequelize.STRING,
    },
    feriados_funcionamento: {
        type: db.Sequelize.STRING,
        require: true
    },
    title3: {
        type: db.Sequelize.STRING,
        require: true
    },
    endereco_completo: {
        type: db.Sequelize.STRING,
        require: true
    },
    googlemapslocation: {
        type: db.Sequelize.STRING,
        require: true
    },
    urlMaps: {
        type: db.Sequelize.STRING,
        require: true
    },
    number: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_number: {
        type: db.Sequelize.STRING,
        require: true
    },
    email: {
        type: db.Sequelize.STRING,
        require: true
    },
    url_email: {
        type: db.Sequelize.STRING,
        require: true
    },
    icon_contact1: {
        type: db.Sequelize.STRING
    },
    url_icon1: {
        type: db.Sequelize.STRING,
        require: true
    },
    icon_contact2: {
        type: db.Sequelize.STRING
    },
    url_icon2: {
        type: db.Sequelize.STRING,
        require: true
    },
    icon_contact3: {
        type: db.Sequelize.STRING
    },
    url_icon3: {
        type: db.Sequelize.STRING,
        require: true
    },
    icon_contact4: {
        type: db.Sequelize.STRING
    },
    url_icon4: {
        type: db.Sequelize.STRING,
        require: true
    },
    icon_contact5: {
        type: db.Sequelize.STRING
    },
    url_icon5: {
        type: db.Sequelize.STRING,
        require: true
    },
    title4: {
        type: db.Sequelize.STRING,
        require: true
    },
    placeholder: {
        type: db.Sequelize.STRING
    },
    titlebtn: {
        type: db.Sequelize.STRING
    },
    title5: {
        type: db.Sequelize.STRING(16),
        require: true
    },
    desc1: {
        type: db.Sequelize.STRING,
        require: true
    },
    imgIcon1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title6: {
        type: db.Sequelize.STRING,
        require: true
    },
    imgIcon2: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title7: {
        type: db.Sequelize.STRING,
        require: true
    },
    imgIcon3: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc3: {
        type: db.Sequelize.STRING,
        require: true
    },
})

//Create table
//Footer_models.sync({ force: true })


module.exports = Footer_models
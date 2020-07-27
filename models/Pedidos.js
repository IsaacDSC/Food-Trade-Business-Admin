const db = require('./db')

const Pedidos = db.sequelize.define('pedido', {
    codigo: {
        type: db.Sequelize.STRING,
        require: true
    },
    nome: {
        type: db.Sequelize.STRING,
        require: true
    },
    quantidade: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    status: {
        type: db.Sequelize.STRING,
        require: true
    }

})

//Pedidos.sync({ force: true })

module.exports = Pedidos
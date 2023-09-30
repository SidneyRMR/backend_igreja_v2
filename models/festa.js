const Sequelize = require('sequelize');
const connection = require('../database/database');

// const Usuario = require('./usuario');
// const Produto = require('./produto');
// const Caixa = require('./caixa');
// const Venda = require('./venda');
// const Venda_Produto = require('./venda_produto');

const Festa = connection.define(
    'festa',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

// Festa.belongsTo(Usuario);
// Festa.belongsTo(Produto);
// Festa.belongsTo(Caixa);
// Festa.belongsTo(Venda);
// Festa.belongsTo(Venda_Produto);

// Festa.sync({force: true});

module.exports = Festa;
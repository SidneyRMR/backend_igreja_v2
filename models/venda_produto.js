const Sequelize = require('sequelize');
const connection = require('../database/database');

const Festa = require('./festa');
const Produto = require('./produto');
const Venda = require('./venda');

const Venda_Produto = connection.define(
    'venda_produto',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        medida: {
            type: Sequelize.STRING,
            allowNull: false
        },
        preco: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        },
        qtde_venda_ptoduts: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);
// FK PRODUTO
Venda_Produto.belongsTo(Festa);
// FK FESTA
Venda_Produto.belongsTo(Produto);
// FK VENDA
Venda_Produto.belongsTo(Venda);

// Venda_Produto.sync({force: true});

module.exports = Venda_Produto;
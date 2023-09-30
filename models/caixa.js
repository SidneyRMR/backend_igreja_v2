const Sequelize = require('sequelize');
const connection = require('../database/database');


const Festa = require('./festa');
const Usuario = require('./usuario');

const Caixa = connection.define(
    'caixa',
    {
        saldo_dinheiro: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        },
        aberto: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }
);
// FK FESTA
Caixa.belongsTo(Festa);
// FK USUARIO
Caixa.belongsTo(Usuario);

// Caixa.sync({force: true});

module.exports = Caixa;
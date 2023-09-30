const Sequelize = require('sequelize');
import dotenv from 'dotenv'

dotenv.config()

const connection = new Sequelize(
    'bd_programa_igreja',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;
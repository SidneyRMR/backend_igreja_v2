const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const connection = require('./database/database');
import dotenv from 'dotenv'

dotenv.config()

// Setup do ambiente
// View engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(cors())

// Sessions
app.use(session({
  secret: 'livro',
  cookie: {
    maxAge: 1200000,
  },
  resave: false,
  saveUninitialized: false
}));

// Ativar os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Banco de Dados
connection.authenticate()
          .then(() => {
            console.log('Conexão feita com sucesso!');
          })
          .catch(erro => {
            console.log('Problemas na conexão!');
          })

// Parser de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Models
const Usuario = require('./models/usuario');
const Caixa = require('./models/caixa');
const Festa = require('./models/festa');
const Produto = require('./models/produto');
const Venda = require('./models/venda');
const Venda_Produto = require('./models/venda_produto');

// importar rotas
const usuarioRoute = require('./routes/usuarioRoute');

//Rotas
app.use("/", usuarioRoute)

module.exports = app;

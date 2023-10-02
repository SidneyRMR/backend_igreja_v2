// const express = require('express');
// const Usuario = require('../models/usuario');
// const bcrypt = require('bcryptjs');

// exports.getAll = (req, res, next) => {
//     Usuario.findAll({
//         order: [
//             ['nome', 'ASC']
//         ]
//     }).then(usuarios => {
//         return res.status(200).json(usuarios)
//         // console.log(res.status(200).json(usuarios));
//         // res.render('usuario/index',{usuarios: usuarios});
//     });
// }

// //Somente no front end
// // exports.renderNovo = (req, res, next) => {
// //     res.render('usuario/novo');
// // }

// exports.create = (req, res, next) => {
//     const nome = req.body.nome;
//     const login = req.body.login;
//     const senha = req.body.senha;
//     const administrador = req.body.administrador;

//     Usuario.findOne({
//         where: {
//             login: login
//         }
//     }).then(usuario => {
//         if(usuario == undefined)
//         {
//             const salt = bcrypt.genSaltSync();
//             const senhaCriptografada = bcrypt.hashSync(senha, salt);

//             Usuario.create({
//                 nome: nome,
//                 login: login,
//                 senha: senhaCriptografada,
//                 administrador: administrador
//             }).then(() => {
//                 // res.redirect('/usuarios');
//                 return res.status(200).json('Usuário criado com sucesso!')
//             })
//         }
//         else
//         {
//             //Verificar como ficaria no frontend
//             // res.redirect('/usuarios');
//         }
//     });
// }

// // exports.usuarioEditar = (req, res, next) => {
// //     const id = req.params.id;
// //     Usuario.findByPk(id).then(usuario => {
// //         res.render('usuario/editar', {usuario: usuario});
// //     });
// // }

// exports.update = (req, res, next) => {
//     const id = req.body.id;
//     const nome = req.body.nome;
//     const login = req.body.login;
//     const administrador = req.body.administrador;

//     Usuario.update({
//         nome: nome,
//         login: login,
//         administrador: administrador
//     },{
//         where: {
//             id: id
//         }
//     }).then(() => {
//         return res.status(200).json('Usuário alterado com sucesso!')
//     });
// }

// exports.delete = (req, res, next) => {
//     const id = req.params.id;

//     Usuario.destroy({
//         where: {
//             id: id
//         }
//     }).then(() => {
//         return res.status(200).json('Usuário deletado com sucesso!')
//     });
// }

// // exports.renderLogin = (req, res, next) => {
// //     res.render('login', {msg: ''});
// // }

// exports.login = (req, res, next) => {
//     const login = req.body.login;
//     const senha = req.body.senha;

//     Usuario.findOne({
//         where: {
//             login: login
//         }
//     }).then(usuario => {
//         if(usuario != undefined)
//         {
//             const deuCerto = bcrypt.compareSync(senha, usuario.senha);
//             if(deuCerto)
//             {
//                 req.session.login = {
//                     nome: usuario.nome
//                 }

//                 res.redirect('/');
//             }
//             else
//             {
//                 res.render('login', {msg: 'Usuário ou senha inválidos!'});
//             }
//         }
//         else
//         {
//             res.render('login', {msg: 'Usuário ou senha inválidos!'});
//         }
//     })
// }
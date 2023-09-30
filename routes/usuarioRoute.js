const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioControllers');
const checkLogin = require('../middleware/checkLogin');

// router.get('/login', UsuarioController.renderLogin);
router.post('/login', UsuarioController.login);

router.get('/', UsuarioController.getAll);
router.post('/', UsuarioController.create);
router.post('/salvar', UsuarioController.update);
router.get('/delete/:id', UsuarioController.delete);

// router.get('/novo', checkLogin, UsuarioController.renderNovo);
// router.get('/:id', checkLogin, UsuarioController.renderEditar);


module.exports = router;
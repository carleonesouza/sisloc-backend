const Router = require('express');
const router = Router();
const commonController = require('../controllers/common.controller');


//Rotas acesso
router.post('/users/login', commonController.login)
router.post('/users/register', commonController.register)


//Rotas publicas produtos
router.get('/produtos', commonController.listaDeProdutos);
router.get('/produtos/:id', commonController.produtoPorId);
router.get('/produtos/search', commonController.procuraProdutos);

module.exports = router;
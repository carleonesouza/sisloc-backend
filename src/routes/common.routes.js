const Router = require('express');
const router = Router();
const commonController = require('../controllers/common.controller');


//Rotas acesso
router.post('/user/login', commonController.login)
router.post('/user/register', commonController.register)


//Rotas publicas produtos
router.get('/produtos', commonController.listaDeProdutos);
router.get('/produtos/:id', commonController.produtoPorId);
router.get('/produtos/search', commonController.procuraProdutos);

module.exports = router;
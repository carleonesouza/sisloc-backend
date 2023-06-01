const Router = require('express');
const router = Router();
const commonController = require('../controllers/common.controller');


//Rotas acesso
router.post('/users/login', commonController.login)
router.post('/users/register', commonController.register)

module.exports = router;
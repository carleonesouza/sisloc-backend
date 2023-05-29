const Router = require('express');
const router = Router();
const produtoController = require('../controllers/produto.controller');
const usuarioController = require('../controllers/usuario.controller');
const locacaoController = require('../controllers/locacao.controller');
const modalidadeController = require('../controllers/modalidade.controller');
const itemController = require('../controllers/item.controller');

//Produtos
router.post('/produtos/add',produtoController.addProduto);
router.put('/produtos/:id', produtoController.atualizaProduto);
router.delete('/products/:id', produtoController.deletaProduto);

//Usuarios
router.post('/usuarios/add', usuarioController.addUsuario);
router.get('/usuarios/:id', usuarioController.usuarioPorId);


//Locacao
router.post('/locacoes/add', locacaoController.addLocacao);
router.get('/locacoes/:id', locacaoController.locacaoPorId);
router.put('/locacoes/:id', locacaoController.atualizaLocacao);
router.delete('/locacoes/:id', locacaoController.deletaLocacao);

//Modalidade
router.post('/modalidades/add', modalidadeController.addModalidade);
router.get('/modalidades', modalidadeController.listaDeModalidades);
router.get('/modalidades/:id', modalidadeController.modalidadePorId);
router.put('/modalidades/:id', modalidadeController.addModalidade);
router.delete('/modalidades/:id', modalidadeController.deletaModalidade);


//Item
router.post('/itens/add', itemController.addItem);
router.get('/itens', itemController.listaDeItens);
router.get('/itens/:id', itemController.ItemPorId);
router.put('/itens/:id', itemController.atualizaItem);
router.delete('/itens/:id', itemController.deletaItem);



module.exports = router;
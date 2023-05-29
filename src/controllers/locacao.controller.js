const locacaoRepository = require("../repositories/locacao.repository");

exports.addLocacao = async (req, res) => {
  try {
    await locacaoRepository
      .criaLocacao(req.body)
      .then((locacao) => {
        res.status(201).send(locacao);
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
  } catch (err) {
    res.status(500).send({message: err.message});
  }
};


exports.atualizaLocacao = async (req, res) =>{
    try {
        await locacaoRepository
          .atualizaLocacao(req.body, req.params.id)
          .then((locacao) => {
            res.status(201).send(locacao);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}

exports.locacaoPorId = async (req, res) => {
    try {
      await locacaoRepository
        .locacaoPorId(req.params.id)
        .then((produto) => {
          res.status(200).send(produto);
        })
        .catch((err) => {
          res.status(404).send({message: err.message});
        });
    } catch (err) {
      res.status(500).send({message: err.message});
    }
  };


exports.deletaLocacao = async (req, res) =>{
    try {
        await locacaoRepository
          .deletaLocacao(req.params.id)
          .then((locacao) => {
            res.status(200).send(locacao);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}
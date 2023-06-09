const produtoRepository = require("../repositories/produto.repository");

exports.addProduto = async (req, res) => {
  try {
    await produtoRepository
      .criaProduto(req.body)
      .then((produto) => {
        res.status(201).send(produto);
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
  } catch (err) {
    res.status(500).send({message: err.message});
  }
};

exports.listaDeProdutos = async (req, res) => {
  try {
    await produtoRepository
      .listaProdutos()
      .then((lista) => {
        res.status(200).send(lista);
      })
      .catch((err) => {
        res.status(404).send({ message: err.message });
      });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

exports.produtoPorId = async (req, res) => {
  try {
    await produtoRepository
      .produtoPorId(req.params.id)
      .then((produto) => {
        res.status(200).send(produto);
      })
      .catch((err) => {
        res.status(404).send({ message: err.message });
      });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

exports.procuraProdutos = async (req, res) => {
  try {
    await produtoRepository
      .procuraProduto(req.params)
      .then((produto) => {
        res.status(200).send(produto);
      })
      .catch((err) => {
        res.status(404).send({ message: err.message });
      });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};


exports.atualizaProduto = async (req, res) =>{
    try {
        await produtoRepository
          .atualizaProduto(req.body, req.params.id)
          .then((produto) => {
            res.status(201).send(produto);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}


exports.deletaProduto = async (req, res) =>{
    try {
        await produtoRepository
          .deletaProduto(req.params.id)
          .then((produto) => {
            console.log(produto);
            res.status(200).send(produto);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}
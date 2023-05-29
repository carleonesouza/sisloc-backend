const itemRepository = require("../repositories/item.repository");

exports.listaDeItens = async (req, res) => {
    try {
      await itemRepository
        .listaItens()
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

exports.addItem = async (req, res) => {
  try {
    await itemRepository
      .criaItem(req.body)
      .then((item) => {
        res.status(201).send(item);
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
  } catch (err) {
    res.status(500).send({message: err.message});
  }
};


exports.atualizaItem = async (req, res) =>{
    try {
        await itemRepository
          .atualizaItem(req.body, req.params.id)
          .then((item) => {
            res.status(201).send(item);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}

exports.ItemPorId = async (req, res) => {
    try {
      await itemRepository
        .ItemPorId(req.params.id)
        .then((item) => {
          res.status(200).send(item);
        })
        .catch((err) => {
          res.status(404).send({message: err.message});
        });
    } catch (err) {
      res.status(500).send({message: err.message});
    }
  };


exports.deletaItem = async (req, res) =>{
    try {
        await itemRepository
          .deletaItem(req.params.id)
          .then((item) => {
            res.status(200).send(item);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}
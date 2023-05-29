const modalidadeRepository = require("../repositories/modalidade.respository");

exports.listaDeModalidades = async (req, res) => {
    try {
      await modalidadeRepository
        .listaModalidades()
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

exports.addModalidade= async (req, res) => {
  try {
    await modalidadeRepository
      .criaModalidade(req.body)
      .then((modalidade) => {
        res.status(201).send(modalidade);
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
  } catch (err) {
    res.status(500).send({message: err.message});
  }
};


exports.atualizaModalidade = async (req, res) =>{
    try {
        await modalidadeRepository
          .atualizaModalidade(req.body, req.params.id)
          .then((modalidade) => {
            res.status(201).send(modalidade);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}

exports.modalidadePorId = async (req, res) => {
    try {
      await modalidadeRepository
        .modalidadePorId(req.params.id)
        .then((modalidade) => {
          res.status(200).send(modalidade);
        })
        .catch((err) => {
          res.status(404).send({message: err.message});
        });
    } catch (err) {
      res.status(500).send({message: err.message});
    }
  };


exports.deletaModalidade = async (req, res) =>{
    try {
        await modalidadeRepository
          .deletaModalidade(req.params.id)
          .then((modalidade) => {
            res.status(200).send(modalidade);
          })
          .catch((err) => {
            res.status(400).send({message: err.message});
          });
      } catch (err) {
        res.status(500).send({message: err.message});
      }
}
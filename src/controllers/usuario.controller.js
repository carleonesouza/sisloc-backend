const usuarioRepository = require("../repositories/usuario.repository");

exports.addUsuario = async (req, res) => {
  try {
    await usuarioRepository
      .criaUsuario(req.body)
      .then((usuario) => {
        res.status(201).send(usuario);
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

exports.atualizaUsuario = async (req, res) => {
  try {
    await usuarioRepository
      .atualizaUsuario(req.body, req.params.id)
      .then((usuario) => {
        res.status(201).send(usuario);
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

exports.usuarioPorId = async (req, res) => {
    try {
      await usuarioRepository
        .usuarioPorId(req.params.id)
        .then((produto) => {
          res.status(200).send(produto);
        })
        .catch((err) => {
          res.status(404).send({message: err.message});
        });
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  };

exports.deletaUsuario = async (req, res) => {
  try {
    await usuarioRepository
      .deletaUsuario(req.params.id)
      .then((usuario) => {
        res.status(200).send(usuario);
      })
      .catch((err) => {
        res.status(400).send({message: err.message});
      });
  } catch (error) {
    res.status(500).send({message: error.message});
  }
};

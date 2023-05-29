const commonRepository = require("../repositories/common.repository");
const usuarioRepository = require("../repositories/usuario.repository");
const { generateToken } = require("../services/auth");

exports.listaDeProdutos = async (req, res) => {
  try {
    await commonRepository
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
    await commonRepository
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
    await commonRepository
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

exports.login = async (req, res) => {
  try {
    await usuarioRepository
      .usuarioValidacao(req.body.email, req.body.password)
      .then((user) => {
        if (user) {
          const token = generateToken(user.email, user._id);
          res.status(200).send({
            accessToken: token,
            user: { name: user.nome, email: user.email, _id: user._id },
          });
        } else {
          throw new Error("Email or password invalid!");
        }
      })
      .catch((err) => {
        res.status(401).send({ message: "Unauthorized! " + err.message });
      });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    await usuarioRepository
      .registraUsuario(req.body)
      .then((user) => {
        if (user) {
          const token = generateToken(user.email, user._id);
          res.status(200).send({
            accessToken: token,
            user: { name: user.nome, email: user.email, _id: user._id },
          });
        }
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

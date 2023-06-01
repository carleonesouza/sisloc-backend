const commonRepository = require("../repositories/common.repository");
const Usuario = require("../model/usuario");
const { generateToken } = require("../services/auth");
const { validate } = require("../services/validate");


exports.login = async (req, res) => {
  try {
    await Usuario.findOne({ email: req.body.email })
      .select("+password")
      .exec()
      .then((user) => {         
        if ( validate(req.body.password, user.password) ) {       
          const token = generateToken(user.email, user._id);
          return res.status(200).send({
            accessToken: token,
            user: { name: user.nome, email: user.email, _id: user._id },
          });
        } 
      })
      .catch((err) => {
        res.status(401).send({ message: "Unauthorized! " + err.message });
      }).finally();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    await commonRepository
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

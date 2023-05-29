const Usuario = require("../model/usuario");
const { validate } = require("../services/validate");

exports.criaUsuario = async (usuario) => {
  try {
    const data = await Usuario.findOne({ email: usuario.email });
    if (data) {
      throw new Error("Usuário já cadastrado!");
    }
    const usr = await Usuario.create(usuario);
    return usr;
  } catch (error) {
    throw error;
  }
};

exports.atualizaUsuario = async (usuario, id) => {
  try {
    const usuarioAtualizado = await Usuario.updateOne(
      { _id: id },
      {
        $set: {
          nome: usuario.nome,
        },
      }
    );
    return usuarioAtualizado;
  } catch (error) {
    throw new Error(error);
  }
};

exports.usuarioValidacao = async (email, password) => {
  try {
    await Usuario.findOne({ email: email })
      .select("+password")
      .exec()
      .then((user) => {
        if (validate(password, user?.password)) {
          return user;
        }
        return false;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    throw error;
  }
};

exports.registraUsuario = async (user) => {
  try {
    const usr = await Usuario.findOne({ email: user.email }).exec();
    if (usr) {
      throw new Error("Usuário já cadastrado!");
    }
    const novoUser = await Usuario.create(user);
    return novoUser;
  } catch (error) {
    throw error;
  }
};

exports.usuarioPorId = async (id) => {
  try {
    const query = Usuario.where({ _id: id });
    const usuario = await query.findOne();
    return usuario;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deletaUsuario = async (id) => {
  try {
    const usr = await Usuario.findByIdAndDelete({ _id: id });
    return usr;
  } catch (error) {
    throw new Error(error);
  }
};

const Usuario = require("../model/usuario");


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

const Usuario = require("../model/usuario");


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

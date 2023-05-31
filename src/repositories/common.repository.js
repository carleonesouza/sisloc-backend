const Produto = require("../model/produto");
const Usuario = require("../model/usuario");


exports.listaProdutos = async () => {
  try {
    const popObj = {
      path: "modalidades",
      populate: {
        path: "itens",
      },
    };
    const lista = await Produto.find({}).populate(popObj).exec();
    return lista;
  } catch (error) {
    throw new Error(error);
  }
};

exports.produtoPorId = async (id) => {
  try {
    const popObj = {
      path: "modalidades",
      populate: {
        path: "itens",
      },
    };
    const query = Produto.where({ _id: id });
    const produto = await query
      .findOne()
      .populate(popObj)
      .exec();
    return produto;
  } catch (error) {
    throw new Error(error);
  }
};

exports.procuraProduto = async (query) => {
  try {
    const queryRegx = new RegExp(query, "i");
    const produto = await Produto.find({
      $or: [
        { nome: { $regex: queryRegx } },
        { descricao: { $regex: queryRegx } },
      ],
    }).toArray();
    return produto;
  } catch (error) {
    throw new Error(error);
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

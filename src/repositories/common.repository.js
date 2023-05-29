const Produto = require("../model/produto");

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

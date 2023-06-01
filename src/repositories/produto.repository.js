const Produto = require("../model/produto");

exports.criaProduto = async (produto) => {
  try {
    const prod = await Produto.create(produto);
    return prod;
  } catch (error) {
    throw new Error(error)
  }
};

exports.atualizaProduto = async (produto, id) => {
  try {
    const produtoAtualizado = await Produto.updateOne(
      { _id: id},
      {
        $set: {
          nome: produto.nome,
          descricao: produto.descricao,
          classificacao: produto.classificacao,
          modelo: produto.modelo,
          preco: produto.preco,
          imagem: produto.imagem,
          status: produto.status,
        },
      }
    );

    return produtoAtualizado;
  } catch (error) {
    throw new Error(error)
  }
};
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

    const value = query.terms.toUpperCase().charAt(0);
  
    const produto = await Produto.find({
     $or:[
        {
          "nome":{ $regex:value},
        }
     ]
    }).
    limit(10).
    exec();
    return produto;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deletaProduto = async (id) => {
    try {
        const prod = await Produto.findByIdAndDelete({ _id: id })
        return prod;
    } catch (error) {
      throw new Error(error)
    } 
};

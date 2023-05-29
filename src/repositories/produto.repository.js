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


exports.deletaProduto = async (id) => {
    try {
        const prod = await Produto.findByIdAndDelete({ _id: id })
        return prod;
    } catch (error) {
      throw new Error(error)
    } 
};

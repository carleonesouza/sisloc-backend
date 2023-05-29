const Modalidade = require("../model/modalidade");

exports.listaModalidades = async () => {
    try {
      const modalidades = await Modalidade.find({}).populate("itens").exec();
      return modalidades;
    } catch (error) {
      throw new Error(error)
    }
}

exports.criaModalidade = async (modalidade) => {
  try {
    const mod = await Modalidade.create(modalidade);
    return mod;
  } catch (error) {
    throw new Error(error)
  }
};


exports.atualizaModalidade = async (modalidade, id) => {
  try {
    const modalidadeAtualizado = await Modalidade.updateOne(
      { _id: id },
      {
        $set: {
          nome: modalidade.nome,
          descricao: modalidade.descricao,
          preco: modalidade.preco,
          itens: modalidade.itens,
          status: modalidade.status,
        },
      }
    );
    return modalidadeAtualizado;
  } catch (error) {
    throw new Error(error)
  }
};


exports.ModalidadePorId = async (id) => {
  try {
    const query = Modalidade.where({ _id: id });
    const modalidade = await query.findOne().populate("itens").exec();
    return modalidade;
  } catch (error) {
    throw new Error(error)
  }
};

exports.deletaModalidade = async (id) => {
  try {
    const modalidade = await Modalidade.findByIdAndDelete({ _id: id });
    return modalidade;
  } catch (error) {
    throw new Error(error)
  }
};

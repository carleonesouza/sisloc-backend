const Locacao = require("../model/locacao");

exports.criaLocacao = async (locacao) => {
  try {
    const loc = await Locacao.create(locacao);
    return loc;
  } catch (error) {
    throw new Error(error)
  }
};

exports.atualizaLocacao = async (locacao, id) => {
  try {
    const locacaoAtualizado = await Locacao.updateOne(
      { _id: id },
      {
        $set: {
          modalidade: locacao.modalidade,
          hora_inicio: locacao.hora_inicio,
          hora_fim: locacao.hora_fim,
          inicio_loca: locacao.inicio_loca,
          fim_loca: locacao.fim_loca,
          status: locacao.status,
        },
      }
    );
    return locacaoAtualizado;
  } catch (error) {
    throw new Error(error)
  }
};


exports.locacaoPorId = async (id) => {
  try {
    const query = Locacao.where({ _id: id });
    const locacao = await query.findOne();
    return locacao;
  } catch (error) {
    throw new Error(error)
  }
};

exports.deletaLocacao = async (id) => {
  try {
    const loc = await Locacao.findByIdAndDelete({ _id: id });
    return loc;
  } catch (error) {
    throw new Error(error)
  }
};

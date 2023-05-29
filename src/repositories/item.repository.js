const Item = require("../model/item");


exports.listaItens = async () => {
    try {
      const itens = await Item.find({});
      return itens;
    } catch (error) {
      throw new Error(error)
    }
}

exports.criaItem = async (item) => {
  try {
    const itm = await Item.create(item);
    return itm;
  } catch (error) {
    throw new Error(error)
  }
};

exports.atualizaItem = async (item, id) => {
  try {
    const itemAtualizado = await Item.updateOne(
      { _id: id },
      {
        $set: {
          nome: item.nome,
          descricao: item.descricao,
          status: item.status,
        },
      }
    );
    return itemAtualizado;
  } catch (error) {
    throw new Error(error)
  }
};


exports.ItemPorId = async (id) => {
  try {
    const query = Item.where({ _id: id });
    const item = await query.findOne();
    return item;
  } catch (error) {
    throw new Error(error)
  }
};

exports.deletaItem = async (id) => {
  try {
    const item = await Item.findByIdAndDelete({ _id: id });
    return item;
  } catch (error) {
    throw new Error(error)
  }
};

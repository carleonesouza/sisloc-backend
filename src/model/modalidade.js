const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  itens: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true }],
  status: { type: Boolean, required: false },
},
{
  locale: { String },
},
{
  timestamps: true,
  collation: 'modalidades',
  strict: false

}
);
module.exports = mongoose.model("Modalidade", schema);
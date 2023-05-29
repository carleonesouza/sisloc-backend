const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  classificacao: { type: String, required: true },
  modalidades:[{ type: mongoose.Schema.Types.ObjectId, ref: "Modalidade", required: true }],
  modelo: { type: String, required: true },
  imagem: { type: String, required: true },
  status: { type: Boolean, required: false },
},
{
  locale: { String },
},
{
  timestamps: true,
  collation: 'produtos',
  strict: false

});
module.exports = mongoose.model("Produto", schema);
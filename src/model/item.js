const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: Boolean, required: false },
},
{
  locale: { String },
},
{
  timestamps: true,
  collation: 'itens',
  strict: false

}
);
module.exports = mongoose.model("Item", schema);
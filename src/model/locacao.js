const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  inicio_loca: { type: Date, required: true },
  fim_loca: { type: Date },
  hora_inicio: {type: Date},
  hora_fim: {type: Date},
  total: { type: Number}, // quantidade de dias *  valor do produto
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true},
  produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Produto", required: true }],
  status: { type: Boolean, required: false },
},
{
  locale: { String },
},
{
  timestamps: true,
  collation: 'locacoes',

}
);
module.exports = mongoose.model("Locacao", schema);
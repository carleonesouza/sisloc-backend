const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_WORK_FACTOR } = require('../util/util')

const Userschema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: { type: String, required: true, select: false}, 
    status: { type: Boolean, require: false},
  },
  {
    locale: { String },
  },
  {
    timestamps: true,
    collation: 'usuarios',
  
  }
);

Userschema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next();
  }
});

module.exports = mongoose.model("Usuario", Userschema);

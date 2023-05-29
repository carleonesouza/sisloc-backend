const bcrypt = require("bcrypt");

exports.validate = async (password, user) => {
  const isValid = await bcrypt.compare(password, user);
  if (!isValid) throw new Error("invalid email or password!");
  return isValid;
}

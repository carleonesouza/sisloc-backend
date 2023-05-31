const bcrypt = require("bcrypt");

exports.validate =  (password, user) => {
  const isValid =  bcrypt.compareSync(password, user);
  if (isValid) {
    return isValid;
  }else{
    throw new Error("invalid email or password!");
 
  }
 
}

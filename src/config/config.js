const mongoose = require('mongoose');
const { DATABASE } = require('../util/util');


mongoose.Promise = global.Promise;

mongoose.connect(DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => (
    console.log('DB connection was successfully!!')))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
    process.exit();
  });



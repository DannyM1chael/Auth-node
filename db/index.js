const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('Connected to db'))
  .catch((error) => console.log(error));

const db = mongoose.connection;

module.exports = db;

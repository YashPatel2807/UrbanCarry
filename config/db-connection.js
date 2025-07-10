const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/urbancarrydb")
  .then(console.log(`Connected to the mongoDb`))
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

module.exports = mongoose.connection;

const express = require("express");
const app = express();
// Local Modules
const db = require("./config/db-connection");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const ownersRouter = require("./routes/ownersRouter");

// Routers
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/owners", ownersRouter);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

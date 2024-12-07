const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();


connectDb()
const app = express();
const port = process.env.port || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)
app.listen(port, () => {
  console.log(`hey now say now ${port}`);
});

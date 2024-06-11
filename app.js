const express = require("express");
const db = require("./config/mongoose-connection.js");
const usersRouter = require("./routes/usersRouter.js");
const ownersRouter = require("./routes/ownersRouter.js");
const productsRouter = require("./routes/productsRouter.js");

const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //used to serve static files like css,html
app.set("view engine", "ejs");

require("dotenv").config();

app.use("/owners", ownersRouter);
app.use("products", productsRouter);
app.use("/users", usersRouter);

app.listen(3000);

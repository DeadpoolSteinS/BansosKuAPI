require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

const salurkanRouter = require("./routes/salurkan");
const alamatRouter = require("./routes/alamat");
const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");

const port = process.env.PORT || 3000;
const db =
  process.env.DB_URI ||
  "mongodb+srv://novaldis:J7oTMA6CCWhfkQDF@cluster0.id7cghp.mongodb.net/bansosku?retryWrites=true&w=majority";

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(salurkanRouter);
app.use(alamatRouter);
app.use(productRouter);
app.use(authRouter);
mongoose.set("strictQuery", false);

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(passport.initialize());
require("./config/passport")(passport);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

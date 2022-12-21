const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const salurkanRouter = require("./routes/salurkan");
const alamatRouter = require("./routes/alamat");
const productRouter = require("./routes/product");

const app = express();
const port = process.env.PORT || 3000;
const db =
  "mongodb+srv://novaldis:J7oTMA6CCWhfkQDF@cluster0.id7cghp.mongodb.net/bansosku?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(salurkanRouter);
app.use(alamatRouter);
app.use(productRouter);

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

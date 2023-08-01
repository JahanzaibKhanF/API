require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");
app.get("/", (req, res) => {
  res.send("Hi Iam Live!!");
});

// middleware or set route
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(PORT, "Yes I am Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
start();

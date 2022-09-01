import express from "express";
import data from "./data.js";
import config from "./config.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";
import vinhoRoute from "./routes/vinhoRoute.js";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

if (mongodbUrl) {
  console.log("connected");
}

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/vinhos", vinhoRoute);

app.get("/api/vinhos/:id", (req, res) => {
  const vinhoId = req.params.id;
  const vinho = data.vinhos.find((x) => x._id === vinhoId);
  if (vinho) {
    res.send(vinho);
  } else {
    res.status(404).send({ msg: "Vinho não encontrado!" });
  }
});

app.get("/api/vinhos", (req, res) => {
  res.send(data.vinhos);
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});

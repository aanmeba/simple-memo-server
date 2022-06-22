import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/memo-routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/memos", router);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://admin:agkskEnf09@cluster0.vplqw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {})
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

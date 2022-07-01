import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/memo-routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/memos", router);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.REACT_APP_DB;

mongoose
  .connect(CONNECTION_URL, {})
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

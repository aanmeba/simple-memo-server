import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/memo-routes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.REACT_APP_DB;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/memos", router);
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

mongoose
  .set("strictQuery", true)
  .connect(CONNECTION_URL, {})
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err.message, "Database error"));

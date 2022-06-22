import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MemoSchema = new Schema({
  memo: {
    type: String,
    required: true,
  },
});

const MemoData = mongoose.model("MemoSchema", MemoSchema);

export default MemoData;

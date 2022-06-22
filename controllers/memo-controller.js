import MemoData from "../models/memo-model.js";

export const getMemos = async (req, res) => {
  try {
    const allMemos = await MemoData.find();
    res.status(200).json(allMemos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createMemo = async (req, res) => {
  console.log(req);
  const aMemo = req.body;
  const newMemo = new MemoData(aMemo);

  try {
    await newMemo.save();
    console.log("memo controller - created", newMemo);
    res.status(201).json(newMemo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

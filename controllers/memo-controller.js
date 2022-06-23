import MemoData from "../models/memo-model.js";

export const getMemos = async (req, res) => {
  try {
    const allMemos = await MemoData.find();
    return res.status(200).json(allMemos);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createMemo = async (req, res) => {
  const aMemo = req.body;
  const newMemo = new MemoData(aMemo);

  try {
    await newMemo.save();
    return res.status(201).json(newMemo);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const deleteMemo = async (req, res) => {
  const id = req.params.id;

  try {
    await MemoData.findByIdAndRemove(id).exec();
    return res.send("Successfully deleted!");
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
};

export const editMemo = async (req, res) => {
  const id = req.params.id;
  const aMemo = req.body;

  try {
    await MemoData.findByIdAndUpdate(id, aMemo, { new: true }).exec();
    return res.send("edited!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

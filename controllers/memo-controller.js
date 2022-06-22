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

export const deleteMemo = async (req, res) => {
  const id = req.params.id;

  try {
    await MemoData.findByIdAndRemove(id).exec();
    res.send("Successfully deleted!");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editMemo = async (req, res) => {
  const id = req.params.id;
  const aMemo = req.body;
  const updateMemo = MemoData(aMemo);

  try {
    await MemoData.findByIdAndUpdate(id, updateMemo).exec();
    res.send("edited!");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

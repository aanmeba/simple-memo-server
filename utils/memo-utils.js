import MemoData from "../models/memo-model.js";

export const getAllMemos = () => MemoData.find();
export const addNewMemo = (req) => MemoData(req.body);
export const removeMemo = (id) => MemoData.findByIdAndRemove(id);
export const updateMemo = (id, memo) =>
  MemoData.findByIdAndUpdate(id, memo, { new: true });

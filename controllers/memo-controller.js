import {
  getAllMemos,
  addNewMemo,
  removeMemo,
  updateMemo,
} from "../utils/memo-utils.js";

// do not remove req
export const getMemos = (req, res) => {
  getAllMemos().exec((err, memos) => {
    if (err) {
      res.status(500);
      return res.json({ error: err.message });
    }
    res.status(200);
    res.send(memos);
  });
};

export const createMemo = (req, res) => {
  addNewMemo(req).save((err, memo) => {
    if (err) {
      res.status(500);
      return res.json({ error: err.message });
    }
    res.status(201);
    res.send(memo);
  });
};

export const deleteMemo = (req, res) => {
  removeMemo(req.params.id).exec((err) => {
    if (err) {
      res.status(404);
      return res.json({ error: "Memo not found" });
    }
    res.status(200);
    return res.json({ success: "Successfully deleted!" });
  });
};

export const editMemo = (req, res) => {
  updateMemo(req.params.id, req.body).exec((err, memo) => {
    if (err) {
      res.status(500);
      return res.json({ error: err.message });
    }
    res.status(200);
    res.send(memo);
  });
};

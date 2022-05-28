const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TODOS = new Schema({
  todo: { type: String },
  done: Boolean,
});

module.exports = mongoose.model("TODOS", TODOS);

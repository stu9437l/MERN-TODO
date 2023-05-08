const { default: mongoose } = require("mongoose");

const TodoSchema = mongoose.Schema({
  todo: String,
});

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = { TodoModel };

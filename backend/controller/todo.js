const { TodoModel } = require("../model/todo");

const CreateTodo = async (req, res, next) => {
  try {
    const { todo } = req.body;

    const existingTodo = await TodoModel.findOne({ todo });
    if (existingTodo) {
      return next({
        status: 409,
        message: "This todo is already in list!",
      });
    }
    const newTodo = new TodoModel({
      todo,
    });
    await newTodo.save();
    res.status(200).json({
      message: "Todo created successfully!",
    });
  } catch (err) {
    next({
      message: err,
    });
  }
};

const GetAllTodo = async (req, res, next) => {
  try {
    const todos = await TodoModel.find({});
    res.status(200).send(todos);
  } catch (err) {
    next({
      message: err,
    });
  }
};

const GetTodoByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);
    if (!todo) {
      return next({
        status: 404,
        message: "Todo Not Found!",
      });
    }
    res.status(200).send(todo);
  } catch (err) {
    next({
      message: err,
    });
  }
};
const UpdateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTodo) {
      return next({
        status: 404,
        message: "Todo not found!",
      });
    }
    res.status(200).json({
      message: "Todo updated successfully",
    });
  } catch (err) {
    next({
      message: err,
    });
  }
};

const DeleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todoItem = await TodoModel.findById(id);
    if (!todoItem) {
      return next({
        status: 404,
        message: "Todo Not Found!",
      });
    }
    await TodoModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Todo deleted Successfully!",
    });
  } catch (err) {
    next({
      mesage: err,
    });
  }
};

module.exports = {
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
  GetAllTodo,
  GetTodoByID,
};

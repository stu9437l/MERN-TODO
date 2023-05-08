const express = require("express");
const router = express.Router();
const {
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
  GetAllTodo,
  GetTodoByID,
} = require("../controller/todo");

router.post("/create", CreateTodo);
router.put("/:id", UpdateTodo);
router.delete("/:id", DeleteTodo);
router.get("/", GetAllTodo);
router.get("/:id", GetTodoByID);

module.exports = router;

const res = require("express/lib/response");
const TODOS = require("../models/todos.js");

let foundTodos = [];

function index(req, res, next) {
  res.render("index", { title: "Unit 2 Assessment", foundTodos });
}

async function create(req, res, next) {
  // console.log(req.body);
  let todo = await TODOS.create(req.body);
  await show();
  console.log(res);

  // console.log("exited show");
  // console.log(foundTodos);

  res.redirect("/");
  res.render("index.ejs", { title: "Unit 2 Assessment", foundTodos });
}

async function show(req, res) {
  console.log("entered show");

  foundTodos = await TODOS.find();
  console.log(foundTodos);
  // console.log(todoDetails);
}

module.exports = {
  index,
  create,
  show,
  // newTodos,
};

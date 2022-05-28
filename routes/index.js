var express = require("express");
var router = express.Router();
const todoCtrl = require("../controller/todos.js");

/* GET home page. */
router.get("/", todoCtrl.index);

router.post("/", todoCtrl.create);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../Controllers/ItemController");

module.exports = function () {
  router.get("/getItems", controller.GetItem);
  router.post("/items", controller.createItem);
  return router;
};

const express = require("express");
const router = express.Router();
const controller = require("../Controllers/ItemController");

module.exports = function () {
  router.get("/getItems", controller.GetItem);
  router.post("/items", controller.createItem);
  router.post("/getItems/:id", controller.getItem);
  router.post("/deleteitems", controller.deleteItem);
  return router;
};

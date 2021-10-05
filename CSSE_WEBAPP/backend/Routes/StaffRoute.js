const express = require("express");
const router = express.Router();
const controller = require("../Controllers/UserController");

module.exports = function () {
  router.post("/staff", controller.createStaff);
  return router;
};

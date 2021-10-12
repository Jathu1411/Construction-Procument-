const Item = require("../Models/Items");
const GetItem = async (req, res) => {
  await Item.find()
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.messsage });
    });
};
// CRUD - Create Items
const createItem = async (req, res) => {
  if (req.body) {
    const item = new Item(req.body);
    await item
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.messsage });
      });
  }
};

module.exports = {
  GetItem,
  createItem,
};

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
    const item =new Item(req.body);
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

const getItem = async (req, res, next) => {
  Item.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: '+err));
}


const deleteItem = async (req, res, next) => {
  Template.findByIdAndDelete(req.params.id)
      .then(()=> res.json('Item deleted'))
      .catch(err => res.status(400).json('Error: '+err));
  
}  
module.exports = {
  GetItem,
  createItem,
  getItem,
  deleteItem
};

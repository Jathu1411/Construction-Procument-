const Staff = require("../Models/SiteManager.model");
// CRUD - Create SiteManager
const createStaff = async (req, res) => {
  if (req.body) {
    const user =new Staff(req.body);
    await user
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.messsage });
      });
  }
};

// CRUD - Get All SiteManager Details

const GetStaff = async (req, res) => {
  await Staff.find()
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.messsage });
    });
};

module.exports = {
  createStaff,
  GetStaff,
};

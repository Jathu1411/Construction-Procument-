const Staff = require("../Models/SiteManager.model");
const createStaff = async (req, res) => {
  if (req.body) {
    const user = Staff(req.body);
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

module.exports = {
  createStaff,
};

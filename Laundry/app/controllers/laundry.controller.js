const db = require("../models");
const Laundry = db.laundrys;
// Create and Save a new Laundry
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create an Order
    const laundry = new Laundry({
      username: req.body.username,
      clothType: req.body.clothType,
      clothFabric: req.body.clothFabric,
      clothColor: req.body.clothColor,
      washed: req.body.washed ? req.body.washed : false
    });
    // Save Laundry Order in the database
    laundry
      .save(laundry)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while placing the order."
        });
      });
  };



// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  Laundry.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};



// Find a single Order with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Laundry.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Order with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Order with id=" + id });
      });
  };



// Update an Order by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Laundry.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found!`
        });
      } else res.send({ message: "Order updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Order with id=" + id
      });
    });
};



// Delete a Order with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Laundry.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
          });
        } else {
          res.send({
            message: "Laundry deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Order with id=" + id
        });
      });
  };



// Delete all Orders from the database.
exports.deleteAll = (req, res) => {
  Laundry.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Orders were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orders."
      });
    });
};



// Find all washed Orderss
exports.findAllWashed= (req, res) => {
    Laundry.find({ washed: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders."
        });
      });
  };
module.exports = app => {
    const laundrys = require("../controllers/laundry.controller.js");
    var router = require("express").Router();
    // Create a new Laundry
    router.post("/", laundrys.create);
    // Retrieve all laundrys
    router.get("/", laundrys.findAll);
    // Retrieve all washed laundrys
    router.get("/washed", laundrys.findAllWashed);
    // Retrieve a single laundry with id
    router.get("/:id", laundrys.findOne);
    // Update a laundry with id
    router.put("/:id", laundrys.update);
    // Delete a laundry with id
    router.delete("/:id", laundrys.delete);
    // Create a new laundry
    router.delete("/", laundrys.deleteAll);
    app.use('/api/laundrys', router);
  };
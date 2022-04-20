module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        username: String,
        clothType: String,
        clothFabric: String,
        clothColor: String,
        washed: Boolean
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Laundry = mongoose.model("laundry", schema);
    return Laundry;
  };

// const mongoose = require("mongoose");
// const Laundry = mongoose.model(
//   "Laundry",
//   new mongoose.Schema({
//     username: String,
//     clothType: String,
//     clothFabric: String,
//     clothColor: String,
//     washed: Boolean
//   })
// );
// module.exports = Laundry;
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const sneakerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Sneaker = model('Sneaker', sneakerSchema);

module.exports = Sneaker;
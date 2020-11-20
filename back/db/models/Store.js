const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function (email) {
  const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return re.test(email);
};

const storeSchema = new Schema({
  superAdmin: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
  image: { type: String },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  CUIL: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  productsCategories: [
    {
      type: String,
      required: true,
    },
  ],

  delivery: {
    type: Boolean,
    required: true,
  },

  accepted: {
    type: Boolean,
    required: true,
  },

  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Store = mongoose.model("store", storeSchema);
module.exports = Store;

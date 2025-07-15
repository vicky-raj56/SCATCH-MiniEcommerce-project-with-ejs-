import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
  },
  gstn:{
    type:String,

  },

  products: [],
  date: {
    type: Date,
    default: Date.now(),
  },
});
const ownerModel = mongoose.model("owner", ownerSchema);
export default ownerModel;

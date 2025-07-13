import mongoose from "mongoose";
import { is } from "./../node_modules/@types/whatwg-url/lib/URL.d";

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
    required: true,
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

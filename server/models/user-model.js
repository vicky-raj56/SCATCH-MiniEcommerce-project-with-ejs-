import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  contact: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
   
  },
 
  cart: [],
  orders: [],
  date: {
    type: Date,
    default: Date.now(),
  },
});
const userModel = mongoose.model("user", userSchema);
export default userModel;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: {
    type: String,
  },
  panelcolor: {
    type: String,
  },
  textcolor: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const productModel = mongoose.model("product", productSchema);
export default productModel;

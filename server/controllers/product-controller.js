import productModel from "./../models/product-model.js";
const productController = async (req, res) => {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    console.log(panelcolor);
    if (!name || !price || !discount || !bgcolor || !panelcolor || !textcolor) {
      return res
        .status(400)
        .json({ success: false, message: "All fileds are required" });
    }
    const file = req.file;
    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "pics are required" });
    }
    const filePath = await file.path;
    const product = new productModel({
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
      image: filePath,
    });
    const savedproduct = await product.save();
    res.send("product created");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { productController };

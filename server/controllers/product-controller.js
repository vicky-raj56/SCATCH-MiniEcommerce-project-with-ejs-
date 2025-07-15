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
    res.status(200).json({success:true,message:"product created"});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
const getProductData = async (req,res)=>{
    try {
      const products = await productModel.find({})
    if(products){
      res.status(200).json({success:true,message:"Product data factched" ,products})
    }else{
      res.status(400).json({success:false,message:"Product not found "})
    }
    // console.log(products)
    // res.render("shop",{products})
    } catch (error) {
      console.log(error);
      res.status(500).json({success:false,message:"Internal server errror",error:error.message})
    }
}

export { productController ,getProductData};

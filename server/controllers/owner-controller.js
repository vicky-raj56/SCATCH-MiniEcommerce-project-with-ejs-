import ownerModel from "../models/owner-model.js";
import bcrypt from "bcrypt";

const getadminCreateProduct = (req,res)=>{
  res.render("admin")
}

const ownerController = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fileds are required" });
    }

    const owner = await ownerModel.find({});
    if (owner.length > 0) {
      return res.status(400).json({
        success: false,
        message: "you don't have acess to craet account more then one",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createOwner = new ownerModel({
      fullname,
      email,
      password: hashPassword,
    });
    const savedOwner = await createOwner.save();
    res.status(201).json({
      success: true,
      message: "owner account created successfully",
      data: savedOwner,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Inter server error" });
  }
};

export { ownerController,getadminCreateProduct };

import userModel from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

// const index = (req,res)=>{
//   res.render("index")

// }

const userController = async (req, res) => {
  try {
    const { fullname, email, password, contact } = req.body;
    if (!fullname || !email || !password || !contact) {
      return res
        .status(400)
        .json({ success: false, message: "All fileds are required" });
    }

    const exstingUser = await userModel.findOne({ email });
    if (exstingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already registered" });
    }
    // hashPassword
    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = new userModel({
      fullname,
      email,
      password: hashPassword,
      contact,
    });
    const savedUser = await createUser.save();
    // jsonwebtoken
    const token = generateToken(savedUser);
    res.cookie("token", token);
    // res.redirect("/");
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: savedUser,
      token,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Inter server error",
      error: error.message,
    });
  }
};

// user login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields atre required" });
    }
    const exstingUser = await userModel.findOne({ email });
    if (!exstingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
    // compaere password
    const isMatchPassword = await bcrypt.compare(
      password,
      exstingUser.password
    );
    if (!isMatchPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
    const token = generateToken(exstingUser);
    res.cookie("token", token);
    res
      .status(200)
      .json({ success: true, message: "User login successfully", token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Inter server error",
      error: error.message,
    });
  }
};

export { userController, loginController };

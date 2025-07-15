import jwt from "jsonwebtoken";
import userModel from "../models/user-model.js";
const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "unauthozied pls login first" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "incorect token pls enter valid token",
      });
    }
    const user = await userModel
      .findOne({ email: decoded.email })
      .select("-password"); //.select se aap password ko frontend se hide kr skte h
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

export default isLoggedIn;

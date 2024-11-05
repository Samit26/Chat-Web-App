import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      console.log("token not available");
      return res
        .status(401)
        .json({ error: "Unauthorized - no token provided" });
    }

    const decoded = jwt.verify(
      token,
      "qeUS+MB/VezUJtljlC6Cm3ruJGRyq+5D4jjHxuQm2wk="
    );
    if (!decoded) {
      console.log("wrong token  available");
      return res
        .status(401)
        .json({ error: "Unauthorized - wrong token provided" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log("error in protect route middleware controller", err.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export default protectRoute;

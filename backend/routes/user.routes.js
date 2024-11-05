import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
const userRoutes = express.Router();

userRoutes.get("/users", protectRoute, getUsersForSidebar);

export default userRoutes;

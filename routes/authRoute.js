import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";
import {
  isAdmin,
  requireSignIn,
  testController,
} from "../middlewares/authMiddleware.js";

//route object
const router = express.Router();

//routing
//register || Method: post
router.post("/register", registerController);

//login || method: POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;

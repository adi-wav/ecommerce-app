import express from "express";
import {
  forgotPasswordController,
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

//forgot password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route auth admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;

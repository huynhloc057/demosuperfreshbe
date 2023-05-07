const express = require("express");
const {
  signup,
  signin,
  signinWithGoogle,
  isUserLoggedIn,
  signout,
  updateForgetPassword,
  sendOtpToEmail,
} = require("../controllers/auth");
const { requireSignin } = require("../common-middleware");
const { verifyOtp } = require("../controllers/otp");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signin/google", signinWithGoogle);
router.post("/isUserLoggedIn", requireSignin, isUserLoggedIn);
router.post("/signout", signout);
router.post("/verifyOtp", verifyOtp);
router.post("/sendOtpToEmail", sendOtpToEmail);
router.post("/updateForgetPassword", updateForgetPassword);
// router.post(
//   "/updateForgetPassword",
//   validateForgotPasswordRequest,
//   updateForgetPassword
// );

module.exports = router;

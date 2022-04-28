import { Router } from "express";
import verifyToken from '../../middleware/authentication';
import {userController} from "../../controller/v1/user.controller"

const router = Router();

router.post("/user/signup/generateOtp", userController.signup_generateOtp);

//router.post("/user/signup/verifyOtp", userController.signup_verifyOtp);

router.post("/user/detail", userController.userDetails);

router.post("/user/interest", verifyToken, userController.interest);

// router.post("/user/login/generateOtp", userController.login_generateOtp);

// router.post("/user/login/generateOtp", userController.login_generateOtp);

export default router;

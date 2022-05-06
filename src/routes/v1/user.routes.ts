import { Router } from "express";
import verifyToken from '../../middleware/authentication';
import { userController } from "../../controller/v1";

const router = Router();

router.post("/user/signup/generateOtp", userController.signup_generateOtp);

router.post("/user/signup/verifyOtp", userController.signup_verifyOtp);

router.put("/user/interest", verifyToken, userController.interest);

router.put("/createProfile", verifyToken, userController.createProfile);

router.post("/user/login/generateOtp", userController.login_generateOtp);

router.post("/user/login/verifyOtp", userController.login_verifyOtp);

// router.post("/trainer/signup/generateOtp", trainerController.signup_generateOtp);




export default router;

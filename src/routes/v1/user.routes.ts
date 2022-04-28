import { Router } from "express";
import verifyToken from '../../middleware/authentication';
import {userController} from "../../controller/v1/user.controller"

const router = Router();



router.post("/user/signup", userController.signup);

router.put("/user/interest", verifyToken, userController.interest);


// router.post("/user/generateOtp", userController.login_generateOtp);


// router.post("/user/verifyOtp", userController.login_verifyOtp);


export default router;

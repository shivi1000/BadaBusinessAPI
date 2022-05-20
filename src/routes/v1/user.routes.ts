import { Router } from "express";
import verifyToken from '../../middleware/authentication';
import { userController } from "../../controller/v1";
import verifyUser from "../../middleware/user.middleware";

const router = Router();

router.post("/user/signup/generateOtp", userController.signup_generateOtp);

router.post("/user/signup/verifyOtp", userController.signup_verifyOtp);

router.put("/user/interest", verifyToken, verifyUser, userController.interest);

router.put("/createProfile", verifyToken, verifyUser, userController.createProfile);

router.post("/user/login/generateOtp", userController.login_generateOtp);

router.post("/user/login/verifyOtp", userController.login_verifyOtp);

router.get("/user/viewProfile", verifyToken, verifyUser , userController.viewProfile);

router.get("/user/getPost", verifyToken, verifyUser, userController.getPost);

router.get("/user/getBrowseCourses", verifyToken, verifyUser, userController.getBrowseCourse);

router.get("/user/getMyCourses", verifyToken, verifyUser, userController.getMyCourse);


export default router;

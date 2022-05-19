import { Router } from "express";
import { trainerController } from "../../controller/v1/trainer.controller";
import verifyToken from "../../middleware/authentication";
import verifyTrainer from "../../middleware/trainer.middleware";

const router = Router();

router.post("/trainer/signup/generateOtp", trainerController.signup_generateOtp);

router.post("/trainer/signup/verifyOtp", trainerController.signup_verifyOtp);

router.put("/trainer/signup/createProfile", verifyToken, verifyTrainer, trainerController.createProfile);

router.post("/trainer/login/generateOtp", trainerController.login_generateOtp);

router.post("/trainer/login/verifyOtp", trainerController.login_verifyOtp);

router.get("/trainer/viewProfile", verifyToken, verifyTrainer, trainerController.viewProfile);

router.get("/trainer/viewPost", verifyToken,  trainerController.viewPost);

router.get("/trainer/viewBrowseCourses", verifyToken,  trainerController.viewPost);

export default router;

import { Router } from "express";
import { trainerController } from "../../controller/v1/trainer.controller";
import verifyToken from "../../middleware/authentication";

const router = Router();

router.post("/trainer/signup/generateOtp", trainerController.signup_generateOtp);

router.post("/trainer/signup/verifyOtp", trainerController.signup_verifyOtp);

router.put("/trainer/signup/createProfile", verifyToken, trainerController.createProfile);

router.post("/trainer/login/generateOtp", trainerController.login_generateOtp);

router.post("/trainer/login/verifyOtp", trainerController.login_verifyOtp);

router.get("/trainer/viewProfile", verifyToken, trainerController.viewProfile);

router.post("/trainer/uploadPost", verifyToken, trainerController.uploadPost);

export default router;

import { Router } from "express";
import { trainerController } from "../../controller/v1/trainer.controller";

const router = Router();

 router.post("/trainer/signup/generateOtp", trainerController.signup_generateOtp);




export default router;

import { Router } from "express";
import { trainerController } from "../../controller/v1/trainer.controller";
import multer from "multer";

const router = Router();

 router.post("/trainer/uploadPost", trainerController.uploadPost);




export default router;

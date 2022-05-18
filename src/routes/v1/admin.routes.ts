import { Router } from "express";
import { adminController } from "../../controller/v1/admin.controller";
import verifyAdmin from "../../middleware/admin.middleware";
import verifyToken from "../../middleware/authentication";

const adminRouter = Router();

adminRouter.post("/admin/signup/generateOtp", adminController.signup_generateOtp);

adminRouter.post("/admin/signup/verifyOtp", adminController.signup_verifyOtp);

adminRouter.put("/admin/signup/createProfile", verifyToken, verifyAdmin, adminController.createProfile);

adminRouter.post("/admin/login/generateOtp", adminController.login_generateOtp);

adminRouter.post("/admin/login/verifyOtp", adminController.login_verifyOtp);

adminRouter.get("/admin/viewProfile", verifyToken, verifyAdmin, adminController.viewProfile);

adminRouter.post("/admin/uploadPost",verifyToken, verifyAdmin, adminController.uploadPost);

adminRouter.use("*",adminController.errs)

export default adminRouter;

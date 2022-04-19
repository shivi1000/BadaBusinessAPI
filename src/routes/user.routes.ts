import { Router } from "express";
import {logico} from "../controller/v1/user.controller";
import verifyToken from '../middleware/authentication';

const router = Router();

router.post("/user/signup", logico.signup);
router.put("/user/interest", verifyToken, logico.interest);
router.post("/user/generateOtp", logico.login_generateOtp);
router.post("/user/verifyOtp", logico.login_verifyOtp);


export default router;


























//import checkAuth from "../middleware/checkAuth";
//import checkAdmin from "../middleware/checkAdmin";

// const {
//   loginUser,
//   verifyOTP,

// } = require("../controllers/auth.controller");

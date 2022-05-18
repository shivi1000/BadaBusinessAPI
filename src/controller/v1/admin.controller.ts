import express, { Request, Response } from "express";
import { STATUS_MSG } from "../../constant/constant";
export const app = express();
app.use(express.json());
import Jwt from "jsonwebtoken";
import { checkExist, createAdmin, insertPhoneNumber, upload, viewAdmin } from "../../entity/v1/admin.entity";
import { adminValidation } from "../../utils/admin.validation";
import { adminService } from "../../service/admin.service";

class adminControllerClass {
  async signup_generateOtp(req: Request, res: Response){
    try {
      await adminValidation.adminContact.validateAsync(req.body);
      const oldAdmin = await checkExist(req.body.phoneNumber);
      if (oldAdmin) {
        res.status(406).json(STATUS_MSG.ERROR.USER_EXIST);
      } else {
        const data: any = await adminService.signup_generateOtp(req.body);
        console.log(data);
        res.status(200).json(data);
      }
    } catch (err: any) {
      res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async signup_verifyOtp(req: Request, res: Response): Promise<void> {
    try {
      await adminValidation.adminContact2.validateAsync(req.body);
      const data: any = await adminService.signup_verifyOtp(req.body);
      const newAdmin = await insertPhoneNumber(req.body);
      let token: any = Jwt.sign(
        { trainerId: newAdmin._id, role:"admin" },<string>process.env.JWT_SECRET_KEY);
      // await SessionModel.create({
      // trainerId: newTrainer._id,
      // deviceId: req.body.deviceId?req.body.deviceId:"0",
      // deviceType: req.body.deviceType?req.body.deviceType:"0",
      // })
      res.status(200).json(STATUS_MSG.SUCCESS.DEFAULT({ token }));
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.UNAUTHORIZED(err.message));
    }
  }

  async createProfile(req: Request, res: Response): Promise<void> {
    try {
      await adminValidation.adminProfile.validateAsync(req.body);
      const newAdmin = await createAdmin(req.body);
      if (newAdmin) {
        res.status(200).json(STATUS_MSG.SUCCESS.PROFILE_UPDATED(newAdmin));
      } else {
        res.status(400).json(STATUS_MSG.ERROR.INVALID_CREDENTIALS);
      }
    } catch (err: any) {
      res.status(405).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async login_generateOtp(req: Request, res: Response): Promise<void> {
    try {
      const oldAdmin = await checkExist(req.body.adminPhoneNumber);
      if (oldAdmin) {
        const data: any = await adminService.login_generateOtp(req.body);
        console.log(data);
        res.status(200).json(data);
      } else {
        res.status(404).json(STATUS_MSG.ERROR.NOT_REGISTERED);
      }
    } catch (err: any) {
      res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async login_verifyOtp(req: Request, res: Response): Promise<void> {
    try {
      const data: any = await adminService.login_verifyOtp(req.body);
      console.log(data);
      // await SessionModel.create({
      //   userId: data._id,
      //   deviceId: req.body.deviceId?req.body.deviceId:"0",
      //   deviceType: req.body.deviceType?req.body.deviceType:"0",
      //   })
      res.status(200).json(data);
    } catch (err: any) {
      res.status(404).json(STATUS_MSG.ERROR.UNAUTHORIZED(err.message));
    }
  }

  async viewProfile(req: Request, res: Response): Promise<void> {
    try {
      const newAdmin = await viewAdmin(req.body);
      if (newAdmin) {
        res.status(200).json(
          STATUS_MSG.SUCCESS.SUCCESS({
            adminFirstName: newAdmin.adminFirstName,
            adminLastName: newAdmin.adminLastName,
            adminPhoneNumber: newAdmin.adminPhoneNumber,
            adminEmail: newAdmin.adminEmail
          })
        );
      } else {
        res.status(402).json(STATUS_MSG.SUCCESS.EMPTY_RECORD);
      }
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async uploadPost(req: Request, res: Response): Promise<void> {
    try {
      const newAdmin = await upload(req.body);
      res.send(newAdmin);
    } catch (err: any) {
      return err;
    }}
    async errs(req: Request, res: Response): Promise<void> {
      try {
       res.send("Route Not Found");
      } catch (err: any) {
        return err;
      }}
}

export const adminController = new adminControllerClass();

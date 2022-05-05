import express, { Request, Response } from "express";
export const app = express();
import { STATUS_MSG } from "../../constant/user.constant";
import {checkExist, createUser, insertInterest, insertPhoneNumber } from "../../entity/v1/user.entity";
import {userValidation,} from "../../utils/user.validation";
import { userService } from "../../service/user.service";
import Jwt from "jsonwebtoken";
app.use(express.json());

class userControllerClass {

  async signup_generateOtp(req: Request, res: Response): Promise<void> {
    try {
      const oldUser = await checkExist(req.body.phoneNumber);
      if(oldUser) {
        res.status(406).json(STATUS_MSG.ERROR.USER_EXIST);
      } else {
      const data: any = await userService.signup_generateOtp(req.body);
      console.log(data);
      res.status(200).json(data);
      }
    } catch (err:any) {
      res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async signup_verifyOtp(req: Request, res: Response): Promise<void> {
    try {
      await userValidation.userContact.validateAsync(req.body);
      const data: any = await userService.signup_verifyOtp(req.body);
      var newUser = await insertPhoneNumber(req.body);
      let token: any = Jwt.sign({userId: newUser._id },<string>process.env.JWT_SECRET_KEY);
        res.status(200).json(STATUS_MSG.SUCCESS.DEFAULT({token}));
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.UNAUTHORIZED(err.message));
    }
  }

  async interest(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await insertInterest(req.body)
      if (newUser) {
        res.status(200).json(STATUS_MSG.SUCCESS.DEFAULT(newUser));
      } else {
        res.status(400).json(STATUS_MSG.ERROR.NOT_EXIST);
      }
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async createProfile(req: Request, res: Response): Promise<void> {
    try {
      await userValidation.userProfile.validateAsync(req.body);
      const newUser = await createUser(req.body);
      if (newUser) {
        res.status(200).json(STATUS_MSG.SUCCESS.PROFILE_UPDATED(newUser));
    } else {
      res.status(400).json(STATUS_MSG.ERROR.INVALID_CREDENTIALS);
    }
    } catch (err: any) {
      res.status(405).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async login_generateOtp(req: Request, res: Response): Promise<void> {
    try {
      const oldUser = await checkExist(req.body.phoneNumber);
      if(oldUser) {
      const data: any = await userService.login_generateOtp(req.body);
      console.log(data);
      res.status(200).json(data);
      } else {
        res.status(404).json(STATUS_MSG.ERROR.NOT_REGISTERED)
      }
    } catch (err:any) {
      res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async login_verifyOtp(req: Request, res: Response): Promise<void> {
    try {
      const data: any = await userService.login_verifyOtp(req.body);
      console.log(data);
        res.status(200).json(data);
    } catch (err: any) {
      res.status(404).json(STATUS_MSG.ERROR.UNAUTHORIZED(err.message));
    }
  }

}

export const userController = new userControllerClass();

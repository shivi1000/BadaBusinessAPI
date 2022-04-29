import express, { Request, Response } from "express";
export const app = express();
import { STATUS_MSG } from "../../constant/user.constant";
import {checkexist,createUser,insertInterest} from "../../entity/v1/user.entity";
import userSignup from "../../utils/user.validation";
import { userService } from "../../service/user.service";
import Jwt from "jsonwebtoken";
app.use(express.json());

class userControllerClass {

  async signup_generateOtp(req: Request, res: Response): Promise<void> {
    try {
      const data: any = await userService.signup_generateOtp(req.body);
      console.log(data);
      res.status(200).json(data);
    } catch (err:any) {
      res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async signup_verifyOtp(req: Request, res: Response): Promise<void> {
    try {
      const data: any = await userService.signup_verifyOtp(req.body);
      console.log(data);
        res.status(200).json(data);
    } catch (err: any) {
      res.status(404).json(STATUS_MSG.ERROR.UNAUTHORIZED(err.message));
    }
  }

  async userDetails(req: Request, res: Response): Promise<void> {
    try {
      await userSignup.validateAsync(req.body);
      const oldUser = await checkexist(req.body.email);
      if (oldUser) {
        res.status(406).json(STATUS_MSG.ERROR.USER_EXIST);
      } else {
        var newUser = await createUser(req.body);
        let token: any = Jwt.sign({ _id: newUser._id },<string>process.env.JWT_SECRET_KEY);
        res.status(201).json(STATUS_MSG.SUCCESS.CREATED({ token }));
      }
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async interest(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await insertInterest(req.body);
      if (newUser) {
        res.status(200).json(STATUS_MSG.SUCCESS.DEFAULT);
      } else {
        res.status(400).json(STATUS_MSG.ERROR.NOT_EXIST);
      }
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  

  // async login_generateOtp(req: Request, res: Response): Promise<void> {
  //   try {
  //     const data: any = await userService.signup_generateOtp(req.body);
  //     console.log(data);
  //     res.status(200).json(data);
  //   } catch (err:any) {
  //     res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
  //   }
  // }

  // async login_verifyOtp(req: Request, res: Response): Promise<void> {
  //   try {
  //     const data: any = await userService.signup_verifyOtp(req.body);
  //     console.log(data);
  //       res.status(200).json(data);
  //   } catch (err: any) {
  //     res.status(404).json(STATUS_MSG.ERROR.UNAUTHORIZED(err.message));
  //   }
  // }

}

export const userController = new userControllerClass();

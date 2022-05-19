import express, { Request, Response } from "express";
import { STATUS_MSG } from "../../constant/constant";
import { trainerValidation } from "../../utils/trainer.validation";
import {
  checkExist,createTrainer,insertPhoneNumber,viewPost,viewTrainer,viewBrowseCourses,} 
  from "../../entity/trainer.entity";
import { trainerService } from "../../service/trainer.service";
export const app = express();
app.use(express.json());
import Jwt from "jsonwebtoken";

class trainerControllerClass {
  async signup_generateOtp(req: Request, res: Response): Promise<void> {
    try {
      await trainerValidation.trainerContact.validateAsync(req.body);
      const oldTrainer = await checkExist(req.body.phoneNumber);
      if (oldTrainer) {
        res.status(406).json(STATUS_MSG.ERROR.USER_EXIST);
      } else {
        const data: any = await trainerService.signup_generateOtp(req.body);
        console.log(data);
        res.status(200).json(data);
      }
    } catch (err: any) {
      res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async signup_verifyOtp(req: Request, res: Response): Promise<void> {
    try {
      await trainerValidation.trainerContact2.validateAsync(req.body);
      const data: any = await trainerService.signup_verifyOtp(req.body);
      const newTrainer = await insertPhoneNumber(req.body);
      let token: any = Jwt.sign(
        { trainerId: newTrainer._id, role: "trainer" },
        <string>process.env.JWT_SECRET_KEY
      );
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
      await trainerValidation.trainerProfile.validateAsync(req.body);
      const newTrainer = await createTrainer(req.body);
      if (newTrainer) {
        res.status(200).json(STATUS_MSG.SUCCESS.PROFILE_UPDATED(newTrainer));
      } else {
        res.status(400).json(STATUS_MSG.ERROR.INVALID_CREDENTIALS);
      }
    } catch (err: any) {
      res.status(405).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async login_generateOtp(req: Request, res: Response): Promise<void> {
    try {
      const oldTrainer = await checkExist(req.body.trainerPhoneNumber);
      if (oldTrainer) {
        const data: any = await trainerService.login_generateOtp(req.body);
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
      const data: any = await trainerService.login_verifyOtp(req.body);
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
      const newTrainer = await viewTrainer(req.body);
      if (newTrainer) {
        res.status(200).json(
          STATUS_MSG.SUCCESS.SUCCESS({
            trainerFirstName: newTrainer.trainerFirstName,
            trainerLastName: newTrainer.trainerLastName,
            trainerPhoneNumber: newTrainer.trainerPhoneNumber,
            trainerEmail: newTrainer.trainerEmail,
          })
        );
      } else {
        res.status(402).json(STATUS_MSG.SUCCESS.EMPTY_RECORD);
      }
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async viewPost(req: Request, res: Response): Promise<void> {
    try {
      const newTrainer = await viewPost(req.body);
      if (newTrainer) {
        res.status(200).json(
          STATUS_MSG.SUCCESS.SUCCESS({
            videoUrl: newTrainer.videoUrl,
            thumbnailUrl: newTrainer.thumbnailUrl,
            description: newTrainer.description,
            duration: newTrainer.duration,
            category: newTrainer.category,
          })
        );
      } else {
        res.status(402).json(STATUS_MSG.SUCCESS.EMPTY_RECORD);
      }
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  async viewBrowseCourse(req: Request, res: Response): Promise<void> {
    try {
      const newTrainer = await viewBrowseCourses(req.body);
      if (newTrainer) {
        res.status(200).json(
          STATUS_MSG.SUCCESS.SUCCESS({
            imageUrl: newTrainer.videoUrl,
            description: newTrainer.description,
            //courseDuration: newTrainer.courseDuration,
            category: newTrainer.category,
            //numberOfVideos: newTrainer.numberOfVideos,
          })
        );
      } else {
        res.status(402).json(STATUS_MSG.SUCCESS.EMPTY_RECORD);
      }
    } catch (err: any) {
      res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
    }
  }

  
}

export const trainerController = new trainerControllerClass();

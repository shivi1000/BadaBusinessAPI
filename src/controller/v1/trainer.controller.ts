import express, { Request, Response } from "express";
import { STATUS_MSG } from "../../constant/constant";
import { checkExist } from "../../entity/v1/entity";
import { trainerService } from "../../service/trainer.service";
export const app = express();
app.use(express.json());


class trainerControllerClass {

    async signup_generateOtp(req: Request, res: Response): Promise<void> {
      try {
        const oldUser = await checkExist(req.body.phoneNumber);
        if(oldUser) {
          res.status(406).json(STATUS_MSG.ERROR.USER_EXIST);
        } else {
          const data: any = await trainerService.signup_generateOtp(req.body);
          console.log(data);
          res.status(200).json(data);
        }
      } catch (err:any) {
        res.status(404).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message));
        }
}



}

export const trainerController = new trainerControllerClass();
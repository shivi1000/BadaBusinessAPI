import express, { Request, Response } from "express";
import { STATUS_MSG } from "../../constant/constant";
import { trainerService } from "../../service/trainer.service";
export const app = express();
app.use(express.json());


class trainerControllerClass {

  async uploadPost(req: Request, res: Response): Promise<void> {
    try {
      const data: any = await trainerService.uploadPost(req.body);
      res.send(data);
    } catch (err:any) {
      return err
  }
}

}

export const trainerController = new trainerControllerClass();
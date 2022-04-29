import { userValidation } from "../utils/user.validation";
import { Request, Response, NextFunction } from "express";
import { STATUS_MSG } from "../constant/user.constant";
class validationClass {
  async userInterest(req: Request, res: Response, next: NextFunction) {
    try {
      await userValidation.userInterest.validateAsync(req.body);
    } catch (err:any) {
        res.status(401).json(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE(err.message))
      
    }
  }
}
export const validation = new validationClass();

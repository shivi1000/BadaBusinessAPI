import express, { Request, NextFunction, Response } from "express";
import { STATUS_MSG } from "../constant/constant";
import  trainer from "../models/trainer.model"
import multer from "multer";
import path from "path";
export const app = express();
app.use(express.json());

class trainerServiceClass {

  async uploadPost(data: any): Promise<void> {
    try {
     const user = await trainer.findOne({email:data.trainnerEmail});
     if(!user){
     const createTrainner:any = await trainer.create(data);
     return createTrainner;
     }
    } catch (err:any) {
      return err
    }
 }
}

export const trainerService = new trainerServiceClass();

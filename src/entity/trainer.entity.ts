import express, { Application, NextFunction, Request, Response } from "express";
import post from "../models/post.model";
import trainer from "../models/trainer.model"
const app: Application = express();
app.use(express.json());

export async function checkExist(trainerPhoneNumber: any) {
  const oldTrainer = await trainer.findOne({ trainerPhoneNumber: trainerPhoneNumber });
  return oldTrainer;
}

export async function insertPhoneNumber(data: any) {
    try {
      const newTrainer = await trainer.create({
        trainerPhoneNumber: data.trainerPhoneNumber,
      });
      return newTrainer;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

  export async function createTrainer(data: any) {
    try {
      const _id = data.tokenId;
      const trainerDataUpdated = await trainer.findByIdAndUpdate(
        { _id },
        { $set: {trainerFirstName: data.trainerFirstName, 
                 trainerLastName: data.trainerLastName,
                 trainerEmail: data.trainerEmail },
        },
        { runValidators: true, new: true }
      );
      return trainerDataUpdated;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  export async function viewTrainer(info: any) {
    try {
      const _id = info.tokenId;
      const trainerDataUpdated = await trainer.findById({_id:_id});
      return trainerDataUpdated;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

  export async function upload(data: any) {
    try{
     const userId = data.tokenId;
     const trainerDataUpdated = await post.create({
     userId: userId,
     videoUrl: data.videoUrl,
     thumbnailUrl: data.thumbnailUrl,
     description: data.description,
     duration: data.duration,
     category: data.category 
    });
     return trainerDataUpdated;
    } catch (err: any) {
    return Promise.reject(err);
      }
  }

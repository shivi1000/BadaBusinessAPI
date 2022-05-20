import express, { Application, NextFunction, Request, Response } from "express";
import trainer from "../models/trainer.model";
import postModel from "../models/post.model";
import browseCoursesModel from "../models/browseCourses.model";
import myCoursesModel from "../models/myCourse.model";
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

  export async function viewTrainer(data: any) {
    try {
      const _id = data.tokenId;
      const trainerDataUpdated = await trainer.findById({_id:_id});
      return trainerDataUpdated;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

  export async function getPost() {
    try {
      const post = await postModel.find({})
      return post;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  export async function getBrowseCourse() {
    try {
      const browseCourses = await browseCoursesModel.find({});
      return browseCourses;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  export async function getMyCourse() {
    try {
      const myCourses = await myCoursesModel.find({});
      return myCourses;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  
  

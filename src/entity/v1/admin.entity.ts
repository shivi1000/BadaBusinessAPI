import express, { Application, NextFunction, Request, Response } from "express";
import post from "../../models/post.model"
import admin from "../../models/admin.model";
import browseCourses from "../../models/browseCourses.model";
import myCourses from "../../models/myCourse.model";
const app: Application = express();
app.use(express.json());

export async function checkExist(adminPhoneNumber: any) {
  const oldAdmin = await admin.findOne({ adminPhoneNumber: adminPhoneNumber });
  return oldAdmin;
}

export async function insertPhoneNumber(data: any) {
    try {
      const newAdmin = await admin.create({
        adminPhoneNumber: data.adminPhoneNumber,
      });
      return newAdmin;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

  export async function createAdmin(data: any) {
    try {
      const _id = data.tokenId;
      const adminDataUpdated = await admin.findByIdAndUpdate(
        { _id },
        { $set: {adminFirstName: data.adminFirstName, 
                 adminLastName: data.adminLastName,
                 adminEmail: data.adminEmail },
        },
        { runValidators: true, new: true }
      );
      return adminDataUpdated;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  export async function viewAdmin(data: any) {
    try {
      const _id = data.tokenId;
      const adminDataUpdated = await admin.findById({_id:_id});
      return adminDataUpdated;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

export async function upload(data: any) {
    try{
     const userId = data.tokenId;
     const adminDataUpdated = await post.create({
     userId: userId,
     videoUrl: data.videoUrl,
     thumbnailUrl: data.thumbnailUrl,
     description: data.description,
     duration: data.duration,
     category: data.category 
    });
     return adminDataUpdated;
    } catch (err: any) {
    return Promise.reject(err);
      }
  }

  export async function browseCourse(data: any) {
    try{
      const userId = data.tokenId;
      const adminDataUpdated = await browseCourses.create({
        userId: userId,
        imageUrl: data.imageUrl,
        description: data.description,
        courseDuration: data.courseDuration,
        category: data.category,
        numberOfVideos: data.numberOfVideos
      });
        return adminDataUpdated;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

    export async function myCourse(data: any) {
      try{
        const userId = data.tokenId;
        const adminDataUpdated = await myCourses.create({
          userId: userId,
          imageUrl: data.imageUrl,
          description: data.description,
          courseDuration: data.courseDuration,
          category: data.category,
          numberOfVideos: data.numberOfVideos
        });
          return adminDataUpdated;
      } catch (err: any) {
        return Promise.reject(err);
      }
  }

import express, { Application, NextFunction, Request, Response } from "express";
import post from "../../models/post.model"
import admin from "../../models/admin.model";
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
  
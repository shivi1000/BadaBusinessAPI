import express, { Application, NextFunction, Request, Response } from "express";
import postModel from "../../models/post.model";
import user from "../../models/user.model";
import browseCoursesModel from "../../models/browseCourses.model";
import myCoursesModel from "../../models/myCourse.model";
import contentsModel from "../../models/contents.model";
import certificateModel from "../../models/certificate.model";
const app: Application = express();
app.use(express.json());

export async function checkExist(phoneNumber: any) {
  const oldUser = await user.findOne({ phoneNumber: phoneNumber });
  return oldUser;
}

export async function insertPhoneNumber(data: any) {
  try {
    const newUser = await user.create({
      phoneNumber: data.phoneNumber,
    });
    return newUser;
  } catch (err: any) {
    return Promise.reject(err);
  }
}

export async function insertInterest(data: any) {
  try {
    const _id = data.tokenId;
    console.log(_id);
    const userDataUpdated = await user.findOneAndUpdate(
      { _id },
      { $set: { interest: data.interest } },
      { runValidators: true, new: true }
    );
    console.log(userDataUpdated);
    return userDataUpdated;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function createUser(data: any) {
  try {
    const _id = data.tokenId;
    const userDataUpdated = await user.findByIdAndUpdate(
      { _id },
      { $set: {firstName: data.firstName, lastName: data.lastName, userType: data.userType,},
      },
      { runValidators: true, new: true }
    );
    return userDataUpdated;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function viewUser(info: any) {
  try {
    const _id = info.tokenId;
    const userDataUpdated = await user.findById({_id:_id});
    return userDataUpdated;
  } catch (err: any) {
    return Promise.reject(err);
  }
}

export async function getPost() {
  try {
    const post = await postModel.find({});
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

export async function contents() {
  try {
    const contents = await contentsModel.find({});
    return contents;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function certificates() {
  try {
    const certificates = await certificateModel.find({});
    return certificates;
  } catch (err) {
    return Promise.reject(err);
  }
}

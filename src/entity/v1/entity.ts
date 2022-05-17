import express, { Application, NextFunction, Request, Response } from "express";
import user from "../../models/user.model";
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
    const userDataUpdated = await user.findOneAndUpdate(
      { _id },
      { $set: { interest: data.interest } },
      { runValidators: true, new: true }
    );
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

// export async function checkExist2(email: any) {
//   const oldTrainer = await user.findOne({ email: email });
//   return oldTrainer;
// }

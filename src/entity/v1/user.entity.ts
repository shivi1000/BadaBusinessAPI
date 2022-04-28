import express, { Application, NextFunction, Request, Response } from "express";
import user from "../../models/user.model";
const app: Application = express();
app.use(express.json());

export async function checkexist( email:any ) {
    const oldUser = await user.findOne({ email: email })
    return oldUser;
}

export async function createUser( data:any ) {
    const newUser = await user.create({
    firstName:data.firstName,
    lastName:data.lastName,
    phoneNumber:data.phoneNumber,
    email:data.email,
    userType:data.userType });
    return newUser;
}

export async function insertInterest( data:any ) {
    const _id =  data.tokenId;
    console.log(_id);
    const userDataUpdated = await user.updateOne({_id }, { $set: { "interest": data.interest } }); 
    return userDataUpdated;

}

// export async function checkUser( phoneNumber:any) {
//     const userExist = await user.findOne(phoneNumber );
//     return userExist;

// }

// export async function generate( phoneNumber:any) {
//     const newUser = await user.create({
//     phoneNumber: phoneNumber })
//     return newUser;
// }



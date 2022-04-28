// import express, { Request, NextFunction, Response } from "express";
// import Jwt from "jsonwebtoken";
// import userSignup from "../utils/user.validation";
// import { STATUS_MSG } from "../constant/user.constant";
// import { Twilio } from "twilio";
// import {
//   checkexist,
//   createUser,
//   checkUser,
//   insertInterest,
// } from "../entity/v1/user.entity";
// export const app = express();
// app.use(express.json());

// const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
// const authToken = <string>process.env.TWILIO_AUTH_TOKEN;
// const serviceID = <string>process.env.SERVICE_ID;
// const client = new Twilio(accountSid, authToken);

// class userServiceClass {
//   async signup(data: any): Promise<Object> {
//     try {
//       await userSignup.validateAsync(data);
//       const oldUser = await checkexist(data.email);
//       if (oldUser) {
//         return Promise.reject(STATUS_MSG.ERROR.ACTION_NOT_ALLOWED);
//       } else {
//         var newUser = await createUser(data);
//         let token: any = Jwt.sign(
//           { _id: newUser._id },
//           <string>process.env.JWT_SECRET_KEY
//         );
//         return Promise.resolve({ newUser, token });
//       }
//     } catch (err: any) {
//       return Promise.reject(err);
//     }
//   }

//   async interest(data: any) {
//     try {
//       const newUser = await insertInterest(data);
//       if (newUser) {
//         return Promise.resolve(STATUS_MSG.SUCCESS.CREATED);
//       } else {
//         return Promise.reject(STATUS_MSG.ERROR.NOT_EXIST("User"));
//       }
//     } catch (err: any) {
//       return Promise.reject(err);
//     }
//   }

//   async login_generateOtp(data: any) {
//     try {
//       const userExist = await checkUser(data);
//       if (userExist) {
//         const result = await client.verify
//           .services(serviceID)
//           .verifications.create({ to: `+${data.phoneNumber}`, channel: "sms" });
//         return Promise.resolve(result);
//       } else {
//         return Promise.reject(STATUS_MSG.ERROR.INCORRECT_CREDENTIALS);
//       }
//     } catch (err: any) {
//       return Promise.reject(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE("Error"));
//     }
//   }

//   async login_verifyOtp(data: any) {
//     try {
//       const { otp, phoneNumber } = data;
//       let otpData: any 
//       await client.verify
//         .services(serviceID)
//         .verificationChecks.create({
//           to: `+${data.phoneNumber}`,
//           code: data.otp,
//         })
//         .then((verification_check: any) => {
//           otpData = verification_check;
//         });

//       if (otpData.status != undefined && otpData.status === "approved") {
//         return Promise.resolve(STATUS_MSG.SUCCESS.LOGIN);
//       } else {
//         return Promise.reject(STATUS_MSG.ERROR.INCORRECT_CREDENTIALS);
//       }
//     } catch (err: any) {
//       return Promise.reject(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE("Error"));
//     }
//   }
// }

// export const userService = new userServiceClass();

import express, { Request, NextFunction, Response } from "express";
import User from "../../models/user.model";
import userSignup from "../../utils/user.validation";
import jwt from "jsonwebtoken";
export const app = express();
app.use(express.json());
import { Twilio } from "twilio";
import { STATUS_MSG } from "../../constant";

const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
const authToken = <string>process.env.TWILIO_AUTH_TOKEN;
const serviceID = <string>process.env.SERVICE_ID;
console.log(process.env.TWILIO_ACCOUNT_SID)
const client = new Twilio(accountSid, authToken);
// const client = require('twilio')(accountSid, authToken)
// console.log(serviceID)

class logic {

signup =  async(req: Request, res: Response, next: NextFunction) => {
  try {
    await userSignup.validateAsync(req.body);
    console.log(req.body);

    const { firstName, lastName, phoneNumber, email, userType } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      userType,
    });

    let token = jwt.sign({_id: user._id} , <string>process.env.JWT_SECRET_KEY)

    res.status(201).json({ message:"User Signedup Successfully", token:token, user:user, 
    status: STATUS_MSG.SUCCESS.CREATED,});
  } catch (err: any) {
    res.status(402).json({message:"invalid credential or user already exist",Error: err.message});
  }
}



interest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id =  req.body.tokenId;
    const Dataupdated = await User.updateOne({_id }, { $set: { "interest": req.body.interest } }); 
    res.status(201).json({ message: "Success"})
  } catch (err: any) {
    res.status(402).json({ message: "Invalid Token"})
  }
};


login_generateOtp = async (req: Request, res: Response) => {
  try {
      const { phoneNumber } = req.body;
      const userExist = await User.findOne({ phoneNumber: phoneNumber });
      if (!userExist) {
          const userDocument = new User({
              phoneNumber: phoneNumber,
          })
          await client.verify.services(serviceID)
              .verifications
              .create({ to: `+${userDocument.phoneNumber}`, channel: 'sms' })
              .then((verification: any) => res.json({message : verification.status}))
      }
      else {
          return res.status(400).json({message : "User already exist"})
      }
  }
  catch (error: any) {
      return res.json({message : error.message})
  }
}

login_verifyOtp = async (req: Request, res: Response) => {
  try {
      const { otp, phoneNumber } = req.body
      let otpData: any
      await client.verify.services(serviceID)
          .verificationChecks
          .create({ to: `+${phoneNumber}`, code: otp })
          .then((verification_check: any) => {
              otpData = verification_check
          });

      if (otpData != undefined && otpData.status == 'approved') {
          console.log(otpData.status)
          // const userDocument = new User({
          //     phoneNumber: phoneNumber
          // })
          // await userDocument.save()
          res.json({message :"user Logged In"})
      }
      else {
          return res.json({message :"Invalid otp"})
      }
  }
  catch (err : any) {
      res.json({message : err.message})
  }
}
    
}

export const logico = new logic()



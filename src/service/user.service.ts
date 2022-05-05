import express, { Request, NextFunction, Response } from "express";
import { STATUS_MSG } from "../constant/user.constant";
// import { Twilio } from "twilio";
import { checkExist } from "../entity/v1/user.entity";
export const app = express();
app.use(express.json());

// const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
// const authToken = <string>process.env.TWILIO_AUTH_TOKEN;
// const serviceID = <string>process.env.SERVICE_ID;
// const client = new Twilio(accountSid, authToken);

class userServiceClass {

  async signup_generateOtp(data: any): Promise<Object> {
    try {
      if (data.phoneNumber ) {
      //   await client.verify
      //  .services(serviceID)
      //  .verifications.create({ to: `+${data.phoneNumber}`, channel: "sms" });
        // console.log(STATUS_MSG.SUCCESS);
        return Promise.resolve(STATUS_MSG.SUCCESS.OTP);
      } else {
        return Promise.reject(STATUS_MSG.ERROR.PROVIDE_PHONE_NUMBER);
      }
    } catch (err: any) {
      return Promise.reject(STATUS_MSG.ERROR.PROVIDE_PHONE_NUMBER);
    }
  }

  async signup_verifyOtp(data: any): Promise<Object> {
    try {
      const { otp, phoneNumber } = data;
      // let otpData: any;
      // await client.verify
      //   .services(serviceID)
      //   .verificationChecks.create({
      //     to: `+${data.phoneNumber}`,
      //     code: data.otp,
      //   })
      //   .then((verification_check: any) => {
      //     otpData = verification_check;
      //  });
      // if (otpData.status != undefined && otpData.status === "approved") {
        if( data.otp === "1234") {
        return Promise.resolve(STATUS_MSG.SUCCESS.OTP_VERIFY)
      } else {
        return Promise.reject("Invalid OTP");
      }
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

  async login_generateOtp(data: any): Promise<Object> {
    try {
      const oldUser = await checkExist(data.phoneNumber);
      if (oldUser) {
        // await client.verify
        //   .services(serviceID)
        //   .verifications.create({ to: `+${data.phoneNumber}`, channel: "sms" });
        return Promise.resolve(STATUS_MSG.SUCCESS.OTP);
      } else {
        return Promise.reject(STATUS_MSG.ERROR.NOT_REGISTERED);
      }
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

  async login_verifyOtp(data: any): Promise<Object> {
    try {
      const { otp, phoneNumber } = data;
      // let otpData: any;
      // await client.verify
      //   .services(serviceID)
      //   .verificationChecks.create({
      //     to: `+${data.phoneNumber}`,
      //     code: data.otp,
      //   })
      //   .then((verification_check: any) => {
      //     otpData = verification_check;
      //   });
      // if (otpData.status != undefined && otpData.status === "approved") {
        if (otp === "1234") {
        return Promise.resolve(STATUS_MSG.SUCCESS.LOGIN);
      } else {
        return Promise.reject(STATUS_MSG.ERROR.UNAUTHORIZED);
      }
    } catch (err: any) {
      return Promise.reject(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE("Error"));
    }
  }
}

export const userService = new userServiceClass();

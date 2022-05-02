import express, { Request, NextFunction, Response } from "express";
import { STATUS_MSG } from "../constant/user.constant";
import { Twilio } from "twilio";
import { any } from "joi";
import { checkUser } from "../entity/v1/user.entity";
export const app = express();
app.use(express.json());

const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
const authToken = <string>process.env.TWILIO_AUTH_TOKEN;
const serviceID = <string>process.env.SERVICE_ID;
const client = new Twilio(accountSid, authToken);

class userServiceClass {
  async signup_generateOtp(data: any): Promise<Object> {
    try {
      if (data.phoneNumber) {
        await client.verify
          .services(serviceID)
          .verifications.create({ to: `+${data.phoneNumber}`, channel: "sms" });
        console.log(STATUS_MSG.SUCCESS.OTP);
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
      let otpData: any;
      await client.verify
        .services(serviceID)
        .verificationChecks.create({
          to: `+${data.phoneNumber}`,
          code: data.otp,
        })
        .then((verification_check: any) => {
          otpData = verification_check;
        });
      if (otpData.status != undefined && otpData.status === "approved") {
        return Promise.resolve(STATUS_MSG.SUCCESS.OTP_VERIFY);
      } else {
        return Promise.reject(STATUS_MSG.ERROR.INCORRECT_CREDENTIALS);
      }
    } catch (err: any) {
      return Promise.reject(STATUS_MSG.ERROR.DEFAULT_ERROR_MESSAGE("Error"));
    }
  }

  async login_generateOtp(data: any): Promise<Object> {
    try {
      const userExist = await checkUser(data.phoneNumber);
      if (userExist) {
        await client.verify
          .services(serviceID)
          .verifications.create({ to: `+${data.phoneNumber}`, channel: "sms" });
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
      let otpData: any;
      await client.verify
        .services(serviceID)
        .verificationChecks.create({
          to: `+${data.phoneNumber}`,
          code: data.otp,
        })
        .then((verification_check: any) => {
          otpData = verification_check;
        });
      if (otpData.status != undefined && otpData.status === "approved") {
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

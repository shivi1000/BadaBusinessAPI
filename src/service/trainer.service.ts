import express, { Request, NextFunction, Response } from "express";
import { STATUS_MSG } from "../constant/constant";
// import { Twilio } from "twilio";
export const app = express();
app.use(express.json());

// const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
// const authToken = <string>process.env.TWILIO_AUTH_TOKEN;
// const serviceID = <string>process.env.SERVICE_ID;
// const client = new Twilio(accountSid, authToken);

class trainerServiceClass {
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



}

export const trainerService = new trainerServiceClass();

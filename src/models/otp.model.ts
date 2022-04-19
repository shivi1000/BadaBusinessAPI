import  { Schema, model } from 'mongoose';
import {Otp} from "../interface/interface"

const otpSchema = new Schema<Otp>({

    phoneNumber: {
        type: Number,
        required: true
    },

    phoneOtp: {
        type: String,
        required: true
    }
},

    {timestamps: true}
    
)
const otp = model<Otp>('User', otpSchema)
export default otp;

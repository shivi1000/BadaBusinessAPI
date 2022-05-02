import  { Schema, model } from 'mongoose';
import {User} from '../interface/interface';
import { DBENUMS } from '../constant/enum.constants';


const Schemas = new Schema({
    
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    
    phoneNumber: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique:true,
    },
    
    userType: {
        type: String,
        required: true,
        enum: ["Entrepreneur" , "Professional" , "Student"]

    },

   interest: {
    type: [String],
    required: true,
    enum:DBENUMS.INTEREST
    
   },

});

const user = model<User>('user', Schemas)
export default user;


import  { Schema, model } from 'mongoose';
import {User} from '../interface/interface';
import { DBENUMS } from '../constant/enum.constants';


const Schemas = new Schema({
    
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },
    
    phoneNumber: {
        type: String,
        //required: true,
        unique: true,
    },

    // email: {
    //     type: String,
    //     sparse: true,
    //     unique:true,
    //     index: true,
    // },
    
    userType: {
        type: String,
        enum: ["Entrepreneur" , "Professional" , "Student"]

    },

   interest: {
    type: [String],
    enum:DBENUMS.INTEREST
    
   },

});

const user = model<User>('user', Schemas)
export default user;


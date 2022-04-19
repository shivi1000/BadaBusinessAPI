import  { Schema, model } from 'mongoose';
import {User} from '../interface/interface';


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
        type: Number,
        required: true,
        unique: true
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
    enum: ["Sales", "Marketing", "Bhagvad Gita", "Leadership Building", "Motivation and Mind Control", 
           "Student", "Strategy", "Business Case study", "Geographic Case Studies", 
           "HR and People Management", "Process and Business Expansion"]

   },

});

const user = model<User>('user', Schemas)
export default user;


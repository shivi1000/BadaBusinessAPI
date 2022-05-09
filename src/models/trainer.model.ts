import  { Schema, model } from 'mongoose';
 import { User} from '../interface/interface';

 const trainerSchema = new Schema({

    trainnerFirstName: {
        type: String,
    },

    trainnerLastName: {
        type: String,
    },
    trainnerPhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },

    trainnerEmail: {
        type: String,
        required: true,
        unique: true
    },

    experience: {
        type: Number,
        required: true
        },
    
    specialization: {
        type: String,
        required: true
        },
})

const trainer = model<User>('User', trainerSchema)
export default trainer


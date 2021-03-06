import  { Schema, model } from 'mongoose';
 import { Trainer} from '../interface/interface';

 const trainerSchema = new Schema({

    trainerFirstName: {
        type: String,
    },
    trainerLastName: {
        type: String,
    },
    trainerPhoneNumber: {
        type: String,
        unique: true,
        sparse: true,
        index: true,
    },
    trainerEmail: {
        type: String,
        unique: true,
        sparse: true,
        index: true,
    },
    role: {
        type: String,
        default: 'trainer'
    }
})

const trainer = model<Trainer>('trainer', trainerSchema)
export default trainer


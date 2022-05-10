import  { Schema, model } from 'mongoose';
 import { Trainer} from '../interface/interface';

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
    videoUrl:{
            type:[String],
            default: ["https://www.youtube.com/watch?v=3IxYmIQ20rI"]
    },
    thumbnailUrl:{
        type:[String],
        default:["https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png"]
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

const trainer = model<Trainer>('Trainner_Model', trainerSchema)
export default trainer


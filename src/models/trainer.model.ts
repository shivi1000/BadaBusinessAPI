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
    // videoUrl:{
    //         type:[String],
    //         default: ["https://www.youtube.com/watch?v=3IxYmIQ20rI"]
    // },
    // thumbnailUrl:{
    //     type:[String],
    //     default:["https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png"]
    // },
    trainerEmail: {
        type: String,
        unique: true
    },
})

const trainer = model<Trainer>('trainer', trainerSchema)
export default trainer


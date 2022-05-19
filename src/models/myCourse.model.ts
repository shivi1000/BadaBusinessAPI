import { ObjectId } from 'mongodb';
import mongoose, { Schema, model } from 'mongoose';
import {myCourses} from '../interface/interface';

 const myCoursesSchema = new Schema({

  userId: { 
    type: ObjectId,
    required: true,
    ref: 'admin'
},

imageUrl: {
  type: String,
  required: true
},

description: {
  type: String,
  required: true
},

courseDuration: {
  type: String,
  required: true
},

category: {
  type: String,
  required: true
},

numberOfVideos: {
  type: Number,
  required: true
}
});

 const myCourses = model<myCourses>('myCourses',myCoursesSchema);
export default myCourses

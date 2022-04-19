import mongoose, { Schema, model } from 'mongoose';
import {Course} from '../interface/interface';

 const courseSchema = new Schema({

   course: {
       type: String,
       required: true,
       enum: ["Browse Course", "My Course"]
   },

   
 });

 const course = model<Course>('Course', courseSchema)
export default course


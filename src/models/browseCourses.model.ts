import { ObjectId } from 'mongodb';
import mongoose, { Schema, model } from 'mongoose';
import {browseCourses} from '../interface/interface';

const browseCoursesSchema = new Schema({

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
},

price: {
  type: String,
  required: true
},

courseHighlights: {
  type: [String],
  required: true,
},
});

const browseCourses = model<browseCourses>('browseCourses',browseCoursesSchema);
export default browseCourses


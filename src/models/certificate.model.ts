import { ObjectId } from 'mongodb';
import mongoose, { Schema, model } from 'mongoose';
import {Certificate} from '../interface/interface';

const certificateSchema = new Schema({

userId: { 
    type: ObjectId,
    required: true,
    ref: 'admin'
},

certificate: {
  type: String,
  required: true
},
});

const certificate = model<Certificate>('certificate',certificateSchema);
export default certificate


import { ObjectId } from 'mongodb';
import  { Schema, model } from 'mongoose';
import { Post } from '../interface/interface';

const postSchema = new Schema({

    userId: { 
        type: ObjectId,
        required: true,
        ref: 'admin'
    },

    videoUrl: {
        type: String,
        required: true
    },

    thumbnailUrl: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    }
 
 });
 
const post = model<Post>('Post', postSchema)
 export default post 
 
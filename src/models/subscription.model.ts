import  { Schema, model } from 'mongoose';
import {Subscription} from '../interface/interface';

 const subscriptionSchema = new Schema({

    subscription: {
        type: String,
        required: true,
        enum: ["Free" , "Premium"]
    },

    subscriptionDate: {
        type: Date,
        required: true
    },

    subscriptionExpiry: {
        type: Date,
        required: true
    },

    subscriptionPrice: {
        type: Number,
        required: true

    }
 });

const subscription = model<Subscription>('Subscription', subscriptionSchema)
export default subscription




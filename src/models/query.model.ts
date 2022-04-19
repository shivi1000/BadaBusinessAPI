import  { Schema, model } from 'mongoose';
import {Query} from '../interface/interface';

 const querySchema = new Schema({

   query: {
       type: String,
       required: true
   },

});

 const query = model<Query>('Query', querySchema)
export default query 

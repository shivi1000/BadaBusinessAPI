import  { Schema, model } from 'mongoose';
import { Admin} from '../interface/interface';

 const adminSchema = new Schema({

    adminFirstName: {
        type: String,
    },
    adminLastName: {
        type: String,
    },
    adminPhoneNumber: {
        type: String,
        unique: true,
        sparse: true,
        index: true,
    },
    adminEmail: {
        type: String,
        unique: true,
        sparse: true,
        index: true,
    },
    role: {
        type: String,
        default: 'admin'
    }
})

const admin = model<Admin>('admin', adminSchema)
export default admin

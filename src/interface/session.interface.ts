import {ObjectId} from "mongoose"

export interface Session{

    userId:ObjectId;
    deviceId:ObjectId;
    token:string;
    isLoggedIn:boolean;
    deviceType:string
}
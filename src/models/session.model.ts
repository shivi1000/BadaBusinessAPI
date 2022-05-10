import { Schema, Model, model, SchemaTypes } from "mongoose";
import { Session } from "../interface/session.interface";

export const MODEL_NAME = "session";

const sesionSchema = new Schema(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      required: true,
    },
    deviceId: {
      type: SchemaTypes.String,
    },
   isLoggedIn: {
      type: SchemaTypes.Boolean,
      required: true,
      default: false,
    },
    deviceType: {
      type: String,
      enum: ['0', '1'],
      // required: true
    },
    createdAt: {
      type: SchemaTypes.Date,
      default: () => new Date(),
    },
    updatedAt: {
      type: SchemaTypes.Date,
      default: () => new Date(),
    },
  },
  {
    collection: MODEL_NAME,
    timestamps: true,
  }
);

export const SessionModel: Model<Session> = model(
  MODEL_NAME,
  sesionSchema
);
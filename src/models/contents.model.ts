import { ObjectId } from "mongodb";
import mongoose, { Schema, model } from "mongoose";
import { Content } from "../interface/interface";

const contentsSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
    ref: "admin",
  },

  courseHighlights: {
    type: [String],
    required: true,
  },

  keyLearnings: {
    type: [String],
    required: true,
  },

  courseBenefitsAndOutcomes: {
    type: [String],
    required: true,
  },
  aboutProfessors: {
    professorName: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    discription: {
      type: [String],
      required: true,
    },
  },
});

const Content = model<Content>("content", contentsSchema);
export default Content;

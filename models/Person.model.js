import mongoose from "mongoose";
const PersonSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        unique: true,
      },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
 
 
  },
  { timestamps: true }
);

export default mongoose.model("Person", PersonSchema);

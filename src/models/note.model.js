import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
   {
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      title: {
         type: String,
         required: true
      },
      description: {
         type: String,
         required: true
      },
      
   },
   {
      timestamps: true
   }
)


export const Notes = mongoose.model("notes", noteSchema)
import { Notes } from "../models/note.model.js";

export const notesController = async (req , res )=>{
    try {
         const {title , description} = req.body;

         if(!title){
            return res.status(400).json({message:"Title is required"})
         }

         if(!description){
            return res.status(400).json({message:"Description is required"})
         }

         const note = await Notes.create({
            title,
            description,
            userId : req.user.id
         })

         res.status(201).json({message:"Note created successfully" , note})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}
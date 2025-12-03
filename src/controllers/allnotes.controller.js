import { Notes } from "../models/note.model.js";

export const allNotesController = async (req, res)=>{
    try {
        const notes = await Notes.find({userId:req.user.id});
        if(!notes){
            return res.status(404).json({message:"Notes not found"})
        }
        res.status(200).json({message:"All Notes" , notes})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}
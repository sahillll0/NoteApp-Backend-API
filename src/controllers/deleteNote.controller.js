
import { Notes } from "../models/note.model.js";


export const deleteNoteController = async (req , res)=>{
    try {
        const note = await Notes.findById(req.params.id);

        if(!note){
            return res.status(404).json({message:"Note not found"})
        }

        // Check if the user making the request is the owner of the note
        if (note.userId.toString() !== req.user.id.toString()) {
            return res.status(401).json({message:"You are not authorized to delete this note"})
        }

        await Notes.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Note deleted successfully"})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}
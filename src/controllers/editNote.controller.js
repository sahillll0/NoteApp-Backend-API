import { Notes } from "../models/note.model.js";


 export const editNoteController = async (req , res)=>{
     try {
        const note = await Notes.findById(req.params.id);

        if(!note){
            return res.status(404).json({message:"Note not found"})
        }

        if(note.userId.toString() !== note.userId.toString()){
            return res.status(401).json({message:"Unauthorized"})
        }

        note.title = req.body.title;
        note.description = req.body.description;
        

        await note.save();

        return res.status(200).json({message:"Note updated successfully"})
        
     } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error"})
     }
}
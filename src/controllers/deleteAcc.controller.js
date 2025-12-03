import { User } from "../models/user.model.js";
import {Notes} from '../models/note.model.js'

export const deleteAcc = async (req , res )=>{
    try {
        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({message:"User not found !"})
        }

        await user.deleteOne();
        await Notes.deleteMany({userId:user._id})

        res.status(200).json({message:"User deleted successfully"})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message:error.message})
    }
}
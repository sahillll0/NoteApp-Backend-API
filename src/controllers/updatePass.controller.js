import {User} from '../models/user.model.js'
import { comparePassword, hashPassword } from "../utils/HashPassword.util.js";


export const updatePassword = async(req,res) => {
    try {
        const {oldPassword,newPassword} = req.body
        const user = await User.findById(req.user.id)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        const isMatch = await comparePassword(oldPassword, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid old password"})
        }

        const hashedPassword = await hashPassword(newPassword)

        user.password = hashedPassword
        await user.save()
        res.status(200).json({message:"Password updated successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
}
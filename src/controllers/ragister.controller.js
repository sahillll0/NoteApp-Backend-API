import { User } from "../models/user.model.js"
import { hashPassword } from "../utils/HashPassword.util.js";
import jwt from "jsonwebtoken"


export const ragisterController = async (req , res )=>{
   try {
       const { fullName , email , password } = req.body;

     if(!fullName){
        return res.status(400).json({message:"Full name is required"})
     }
     if(!email){
        return res.status(400).json({message:"Email is required"})
     }
     if(!password){
        return res.status(400).json({message:"Password is required"})
     }

   

     const existingUser = await User.findOne({email})

     if(existingUser){
        return res.status(400).json({message:"User already exists"})
     }
     
     const hashpass = await hashPassword(password);
      const user = new User({fullName , email , password:hashpass});

      const token = await user.createJWT();

      await user.save();
      
      
      res.status(200).json({message:"User registered successfully" , token})
      
      console.log( "user created" , user)
      
   } catch (error) {

      console.log(error , "error in ragister controller")
      res.status(500).json({message:"Internal server error"})

   }
}

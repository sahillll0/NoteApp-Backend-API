import { User } from "../models/user.model.js";
import { comparePassword } from "../utils/HashPassword.util.js";



export const loginController = async (req , res)=>{
    try {
        const {email , password} = req.body;

        if (!email || !password) {
            res.status(400).json({message : "All fields are required"})
        }

        const user = await User.findOne({email})
        if (!user) {
         res.status(400).json({message : "User not found"})

        }

        const comparePass = await comparePassword(password , user.password)
        if (!comparePass) {
           res.status(400).json({message : " Invalid Password !"})
        }



        await user.save();

        const token =  await user.createJWT();

        res.status(200).json({message : "Login Successfully" , 
            token , 
            user :{
                fullName : user.fullName,
                email : user.email
        }})
    
        
    } catch (error) {
        console.log(error , "error in login controller")
        res.status(500).json({message : "Internal Server Error"})
    
    }
}
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        token:[{
            token:{
                type:String,
                required:true
            }
        }],
        role: {
         type: String,
         default: "user"   // normal user
      }
    },
    {
        timestamps:true
    }
)


userSchema.methods.createJWT = async function(){
    try {
        console.log(this._id);
          const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: "10d" });
        this.token.push({token:token});
        await this.save();
        return token;
        
    } catch (error) {
        console.log(error);
        
    }
}


export const User = mongoose.model("user", userSchema)
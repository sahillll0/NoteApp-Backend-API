import bcrypt from "bcrypt";

export const hashPassword = async (password)=>{
    try {
        const salt = 10;
        const hash = await bcrypt.hash(password,salt)
        return hash
    } catch (error) {
        console.log(error, "error in hash password")
    }
}


export const comparePassword = async (password,hashPassword)=>{
  try {
    const compare = await bcrypt.compare(password,hashPassword)
    return compare
    
  } catch (error) {
    console.log(error , "error in compare password")
  }
}
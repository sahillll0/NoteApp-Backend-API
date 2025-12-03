import jwt from "jsonwebtoken";

const authmiddleware = (req,res ,next)=>{
try {
    const autHeader = req.headers.authorization;
    
    if(!autHeader || !autHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"Unauthorized"})
    }

    const token = autHeader.split(" ")[1];
    
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    


    next();
} catch (error) {
    console.log(error);
    res.status(401).json({message:"Unauthorized"})
}


}

export default authmiddleware
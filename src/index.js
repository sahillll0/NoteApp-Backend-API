import app from "./app.js";
import { connectDB } from "./db/db.js";

connectDB()
   .then(()=>{
      app.listen(process.env.PORT  || 5000 ,()=>{
      console.log("Server is running on port 5000")
})
   })
   .catch(()=>{
    console.log("MongoDB connection error in index file")
    process.exit(1)
   })
       
    

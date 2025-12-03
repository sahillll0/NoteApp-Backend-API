import express from "express";
import { ragisterController } from "../controllers/ragister.controller.js";
import { loginController } from "../controllers/login.controller.js";
import authmiddleware from "../middleware/auth.middleware.js";
import { notesController } from "../controllers/notes.controller.js";
import { allNotesController } from "../controllers/allnotes.controller.js";
import { updatePassword } from "../controllers/updatePass.controller.js";
import { deleteAcc } from "../controllers/deleteAcc.controller.js";
import { deleteNoteController } from "../controllers/deleteNote.controller.js";
import { editNoteController } from "../controllers/editNote.controller.js";


const router = express.Router();

router.get("/",(req ,res )=>{
    res.send("Full Stack MERN Notes App by Sahilll_0")
})

router.post("/register" , ragisterController)

router.post("/login" , loginController)

router.post("/notes" , authmiddleware , notesController)

router.post("/update-password" , authmiddleware , updatePassword)

router.delete("/delete-account" , authmiddleware , deleteAcc)


// Notes routes


router.get("/allnotes" , authmiddleware , allNotesController);

router.delete("/delete/note/:id" , authmiddleware, deleteNoteController)

router.put("/edit/note/:id" , authmiddleware , editNoteController)





export default router
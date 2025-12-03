import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import router from "./routes/index.route.js";
import path from "path";

const _dirname = path.resolve();
console.log(_dirname);


const app = express();

app.use(cors({
    origin: ["https://note-app-frontend-seven.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.use(express.static(path.join(_dirname , "/Frontend/dist")))

export default app
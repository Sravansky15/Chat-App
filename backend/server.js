import path from "path";
import express  from "express" 
import dotenv  from "dotenv"
import cookieParser from "cookie-parser";
import cors from 'cors'


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";


import {app, server} from './socket/socket.js'

const PORT =  5000;


dotenv.config();
const __dirname = path.resolve();
app.use(express.json()); // to parse the incoming with json playloads (from req.body)
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/user",userRoutes);

//app.use(express.static(path.join(__dirname, "/frontend/")));

//app.get("*", (req, res) => {
//	res.sendFile(path.join(__dirname, "frontend", "index.html"));
//});





server.listen(PORT, () => {
    connectToMongoDB()
    console.log("server is running at ${PORT}")
});


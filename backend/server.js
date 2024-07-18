import express  from "express" 
import dotenv  from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
const PORT = process.env.PORT || 4001;


const app = express();

app.use(express.json()); // to parse the incoming with json playloads (from req.body)
app.use(cookieParser());

dotenv.config();
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/user",userRoutes);



app.get("/",(req,res) => {
    // route handle localhost:5000
    res.send("Hello sravan");
});



app.listen(PORT, () => {
    connectToMongoDB()
    console.log("server is running at ${PORT}")
});

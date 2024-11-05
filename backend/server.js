import  express  from "express";
// import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();
// dotenv.config()
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get('/', (req,res)=>{
//     res.send("Hello World")
// })




app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Connected Successfully with the server port ${PORT}`);
})
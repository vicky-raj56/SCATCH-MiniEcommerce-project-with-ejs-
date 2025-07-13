import express from "express"
import dotenv from "dotenv";
dotenv.config();
const app = express();
// import 
import path from "path"
import { fileURLToPath } from 'url';
import connectDB from "./configs/db.js";
import ownerRouter from "./routes/ownerRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js"

// Database connection
connectDB();

// Serve static files from "public" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// middlewares

// routes 
app.use("/owner",ownerRouter);
app.use("/users",userRouter);
app.use("/products",productRouter);







// listen
const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});

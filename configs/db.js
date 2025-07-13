import mongoose, { connect } from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected ")
        
    } catch (error) {
        console.log("Detabase Error ",error)
    }
};
export default connectDB;
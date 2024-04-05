import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://samitkhedekar2594:3ii33LzhQ13DUfH1@cluster0.qfj3jrz.mongodb.net/Chat-app-db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to Database");
    }
    catch(err){
        console.log("Error connecting to MongoDb", err)
    }
}

export default connectToMongoDB;
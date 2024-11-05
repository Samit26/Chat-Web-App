import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("Connected to Database");
  } catch (err) {
    console.log("Error connecting to MongoDb", err);
  }
};

export default connectToMongoDB;

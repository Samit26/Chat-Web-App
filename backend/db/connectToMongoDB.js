import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://trysamitkhedekar2594:qsOGDwPUPRRR1ORH@cluster0.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to Database");
  } catch (err) {
    console.log("Error connecting to MongoDb", err);
  }
};

export default connectToMongoDB;

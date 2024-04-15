import mongoose, { ConnectOptions } from "mongoose";

export const connectMongoDB = async () => {
    try {
        const options: ConnectOptions = {
        };

        await mongoose.connect(process.env.MONGODB_URI || '', options);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
};

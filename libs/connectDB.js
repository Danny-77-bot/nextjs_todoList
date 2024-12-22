import mongoose from 'mongoose';

export const connectionDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log("Mongo URI:", mongoURI);  // Add this line to check if MONGO_URI is being read
    console.log(process.env.a)
    
    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};

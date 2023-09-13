import mongoose from 'mongoose';

export const connectDb = async () => {
  mongoose.set('strictQuery', false);
  mongoose.set('strictPopulate', false);
  let isConnected = false;
  if (isConnected) {
    console.log('MongoDb is connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Mongo Db is Connected.');
  } catch (error) {
    console.log(error);
  }
};

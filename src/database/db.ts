import mongoose from "mongoose";

const uri =
  "mongodb+srv://carneirojhonathan:ILAtR7317uW493L7@cluster0.qqbgofm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDatabase = () => {
  console.log("Wait connecting to MongoDB Atlas...");
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any)
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
};

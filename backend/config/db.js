import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://gaurisawant:Gauri$Ariya24@mycluster.r8zgzc5.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}


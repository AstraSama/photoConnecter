import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connected with DB")
    } catch (error) {
        console.log(error)
    }
})()
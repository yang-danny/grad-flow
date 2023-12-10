const express = require("express");
const mongoose = require("mongoose");
const app = express();
const uri = "mongodb+srv://grad:grad001@grad-flow.9ukj0yg.mongodb.net/?retryWrites=true&w=majority";
async function connectDB(){
  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Connect Error: '+error)
  }
}
connectDB()
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
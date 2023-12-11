const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./database/config.js')
const app = express();
connectDB()
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
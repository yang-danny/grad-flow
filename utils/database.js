const mongoose = require("mongoose");
 const connectDB = async () => {
  try {
   await mongoose.connect('mongodb+srv://grad-flow:jAoObhwRviyyjHX7@grad-flow.9ukj0yg.mongodb.net/grad-flow');
   console.log(`Successfully connected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

module.exports =  connectDB;
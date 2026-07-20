require('dotenv').config();  //for load the secrets from .env file
const express = require('express');
const mongoose = require('mongoose');

const app = express()

app.use(express.json()); //middleware for parsing JSON bodies


//importing user route
const userRoute = require('./routes/userRoute');

//using user route
app.use('/api/users', userRoute);



// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to mongoDB");
})
.catch((err)=>{
    console.log("DB connection ERROR ", err);
})


//Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

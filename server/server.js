const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

const db = require('./config/dbConnection');
db();

const cors = require('cors');

// models
const students = require('./models/Students');
students();

// middleware
app.use(express.json());
app.use(cors());

// routes - students
app.use('/students',require("./routes/Students"))

// routes - admin`
app.use('/admin',require('./routes/Admin'))


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
const mongoose = require('mongoose');

const db = async()=>{
    try {

        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("connect with mongodb Atlas");
        
    } catch (error) {
        console.log("Failed to connect to DB "+error);
    }
}

module.exports = db;
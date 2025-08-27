const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    stuName:{
        type:String,
        required:true
    },
    stuAge:{
        type:String,
        required:true
    },
    stuAddress:{
        type:String,
        required:true
    },
    stuContact:{
        type:String,
        required:true
    },
    stuEmail:{
        type:String,
        required:true
    },
    AdminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin"
    }
},{timestamps:true});

const student =  mongoose.model('Students',studentSchema);

module.exports = student;
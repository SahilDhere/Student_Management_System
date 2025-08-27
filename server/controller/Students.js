const students = require('../models/Students');
const validator = require('validator')

const getStudentInfo = async (req, res) => {
    try {

        const Students = await students.find({ AdminId: req.user.id });
        return res.status(200).json({
            success: true,
            message: "Student Info is : ",
            Students
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed to Show Students Info ", error: error.message });
    }
}

const getOnlyOneStudent = async (req, res) => {
    try {

        const { id } = req.params;

        const data = await students.findById(id);
        if (!data) {
            return res.status(404).json({ success: false, message: "Student are not Found" });
        }

        return res.status(200).json({
            success: true,
            message: "Student Info is : ",
            data
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed to Show the Student Info ", error: error.message })
    }
}

const addStudentInfo = async (req, res) => {
    try {

        const { stuName, stuAge, stuAddress, stuContact, stuEmail } = req.body;

        if (!stuName) {
            return res.status(400).json({ success: false, message: "Student Name is required" })
        }
        if (!stuAge) {
            return res.status(400).json({ success: false, message: "Student Age is required" })
        }
        if (!stuAddress) {
            return res.status(400).json({ success: false, message: "Student Address is required" })
        }
        if (!stuContact) {
            return res.status(400).json({ success: false, message: "Student Contact is required" })
        }
        if (stuContact.length < 10) {
            return res.status(400).json({ success: false, message: "Contact Must be in 10 Numbers" })
        }

        if (!stuEmail) {
            return res.status(400).json({ success: false, message: "Student Email is required" });
        }
        if (!validator.isEmail(stuEmail)) {
            return res.status(400).json({ success: false, message: "Enter a Valid Email" })
        }

        const StudentInfoCheck = await students.findOne({stuEmail});
        if(StudentInfoCheck){
            return res.status(400).json({success:false,message:"Already Student Registerd with this Email"})
        }

        const addStuInfo = await students.create({
            stuName,
            stuAge,
            stuAddress,
            stuContact,
            stuEmail,
            AdminId: req.user.id
        })

        return res.status(200).json({
            success: true,
            message: "Student Information Add Succesfully",
            addStuInfo,
            AdminId: req.user.id
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed to Add Students Details", error: error.message });
    }
}

const editStudentInfo = async (req, res) => {
    try {

        const { id } = req.params;
        const { stuName, stuAge, stuAddress, stuContact, stuEmail } = req.body;

        const editStudentInfo = await students.findByIdAndUpdate(id, { ...req.body }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Edit Student Info Succesfully",
            editStudentInfo
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed to Edit the Student Info", error: error.message })
    }
}

const deleteStudentInfo = async (req, res) => {
    try {

        const { id } = req.params;

        const deleteStudent = await students.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Deleted Student Info Succesfully",
            deleteStudent
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed To Delete Student Info ", error: error.message })
    }
}

module.exports = { getStudentInfo, addStudentInfo, getOnlyOneStudent, editStudentInfo, deleteStudentInfo };
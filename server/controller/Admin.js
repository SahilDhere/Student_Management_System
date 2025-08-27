const admin = require('../models/Admin');
const validator = require('validator')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name) {
            return res.status(400).json({ success: false, message: "Username is required" })
        }

        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Enter a valid Email" })
        }

        if (!password) {
            return res.status(400).json({ success: false, message: "Password is required" })
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Atleast 8 character is required" })
        }

        const Admin = await admin.findOne({ email });
        if (Admin) {
            return res.status(404).json({ success: false, message: "Admin Name is already present" })
        }

        const hashpwd = await bcrypt.hash(password, 10);

        const newAdmin = await admin.create({
            name,
            email,
            password: hashpwd
        })

        const token = jwt.sign({ email, id: admin._id }, process.env.SECRET_KEY);

        return res.status(200).json({
            success: true,
            message: "Account created Succesfully",
            token,
            admin: {
                name: newAdmin.name,
                email: newAdmin.email
            }
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed to SignUp", error: error.message });
    }
}

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Enter a valid Email" })
        }

        if (!password) {
            return res.status(400).json({ success: false, message: "Password is required" })
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Atleast 8 character is required" })
        }

        const Admin = await admin.findOne({ email });
        if (!Admin) {
            return res.status(404).json({ success: false, message: "Admin Name is not found" })
        }

        const isMatch = await bcrypt.compare(password, Admin.password);
        if(!isMatch){
            return res.status(401).json({success:false, message:"Invalid Password."})
        }

        const token = jwt.sign({email, id:Admin._id},process.env.SECRET_KEY);

        return res.status(200).json({
            success:true,
            message:"Login Succesfully",
            token,
            admin:{
                name:Admin.name,
                email:Admin.email
            }
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed To Login!" })
    }
}

module.exports = { signUp, login }
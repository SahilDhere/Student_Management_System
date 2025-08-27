const express = require('express');
const { getStudentInfo, addStudentInfo, getOnlyOneStudent, editStudentInfo, deleteStudentInfo } = require('../controller/Students');
const authenticate = require('../middleware/userAuth');
const router = express.Router();

router.get("/", authenticate, getStudentInfo);
router.get("/:id", authenticate, getOnlyOneStudent)
router.post("/", authenticate,addStudentInfo);
router.put("/:id", authenticate, editStudentInfo);
router.delete("/:id",authenticate, deleteStudentInfo)

module.exports = router;
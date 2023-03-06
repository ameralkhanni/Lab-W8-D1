import express  from "express";
import { createClass, createStudents, createTeacher, getAllClass, getAllStudents, getAllTeachers, getClassById, getStudentById, getTeacherById } from "../controller/School.controller";
let router=express.Router();


router.get('/student', getAllStudents)
router.post('/student', createStudents)
router.get('/student:id', getStudentById)

router.get('/teacher', getAllTeachers)
router.post('/teacher', createTeacher)
router.get('/teacher:id', getTeacherById)

router.get('/class', getAllClass)
router.post('/class', createClass)
router.get('/class:id', getClassById)



export default router;
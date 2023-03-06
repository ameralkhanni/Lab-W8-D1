import {prisma} from "../config/db";

import {Request,Response} from "express";


// get All Students
export const getAllStudents = async(req: Request, res: Response)=>{
    const Students = await prisma.student.findMany();
    res.json(Students);

}
// Add new student

export const createStudents=async(req: Request, res: Response)=>{
    try {
        const student=req.body;
await prisma.student.create({

    data: student,
})
res.json({
    message:"student created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};
// Get student by the id
export const getStudentById = async(req: Request, res: Response)=>{
    const student = await prisma.student.findUnique({


        where: { id: 
            req.params.id }

    });
    if (student == null) {
        res.json({"message":"student not found"});

    }else{

        res.json({"message":student});

    }
    };

    // get All class
export const getAllClass = async(req: Request, res: Response)=>{
    const classroom = await prisma.classroom.findMany();
    res.json(classroom);

}
// Add new class

export const createClass=async(req: Request, res: Response)=>{
    try {
        const classroom=req.body;
await prisma.classroom.create({

    data: classroom,
})
res.json({
    message:"classroom created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};
// Get class by the id
export const getClassById = async(req: Request, res: Response)=>{
    const classroom = await prisma.classroom.findUnique({


        where: { id: 
            req.params.id }

    });
    if (classroom == null) {
        res.json({"message":"class not found"});

    }else{

        res.json({"message":classroom});

    }
    };




     // get All teachers
export const getAllTeachers = async(req: Request, res: Response)=>{
    const teachers = await prisma.teacher.findMany();
    res.json(teachers);

}
// Add new teacher

export const createTeacher=async(req: Request, res: Response)=>{
    try {
        const teacher=req.body;
await prisma.teacher.create({

    data: teacher,
})
res.json({
    message:"teacher created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};
// Get teacher by the id
export const getTeacherById = async(req: Request, res: Response)=>{
    const teacher = await prisma.teacher.findUnique({


        where: { id: 
            req.params.id }

    });
    if (teacher == null) {
        res.json({"message":"teacher not found"});

    }else{

        res.json({"message":teacher});

    }
    };

    // Create endpoint that takes student id and return one student (return bad request if student id is invalid)

export const oneStudentById = async (req:Request, res:Response)=>{
    try{
    const studentId = req.params.id
   const student = await prisma.student.findFirst({
         where:{
           id: studentId 
         }
    })
    if(!student){
        res.json({
            message: "student id is invalid"
        })
    }else{
        res.json(student)
    }
    }catch(error){
        console.log(error)
    }
}

// Create endpoint that takes teacher id and return one teacher (return bad request if teacher id is invalid)
export const oneTeacherById = async (req:Request, res:Response)=>{
    try{
    const teacherId = req.params.id
   const teacher = await prisma.teacher.findFirst({
         where:{
           id: teacherId 
         }
    })
    if(!teacher){
        res.json({
            message: "Teacher id is invalid"
        })
    }else{
        res.json(teacher)
    }
    }catch(error){
        console.log(error)
    }
}


// Create endpoint that takes classroom id and return one classroom (return bad request if classroom id is invalid)
export const oneClassById = async (req:Request, res:Response)=>{
    try{
    const classId = req.params.id
   const classroom = await prisma.classroom.findFirst({
         where:{
           id: classId 
         }
    })
    if(!classroom){
        res.json({
            message: "class id is invalid"
        })
    }else{
        res.json(classroom)
    }
    }catch(error){
        console.log(error)
    }
}
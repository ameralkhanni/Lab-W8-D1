import {prisma} from "../config/db";

import {Request,Response} from "express";


export const getUsers = async(req: Request, res: Response)=>{
    const users = await prisma.user.findMany();
    res.json(users);

}
export const createuser=async(req: Request, res: Response)=>{
    try {
        const user=req.body;
await prisma.user.create({

    data: user,
})
res.json({
    message:"user created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};

export const getProfile = async(req: Request, res: Response)=>{
    const profile = await prisma.profile.findMany();
    res.json(profile);

}
export const createProfile=async(req: Request, res: Response)=>{
    try {
        const profile=req.body;
await prisma.profile.create({

    data: profile,
})
res.json({
    message:"profile created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};
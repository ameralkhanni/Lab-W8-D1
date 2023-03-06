import express  from "express";
import { getUsers, createuser, getProfile, createProfile } from "../controller/user.controller";
let router=express.Router();



router.get('/',getUsers);
router.post('/',createuser );

router.get('/profile',getProfile);
router.post('/profile',createProfile );


export default router;
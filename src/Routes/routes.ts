import express, { Request, Response, Router } from 'express';
import { userRegistration } from '../Controller/userController'

const router = Router();

router.get('/registerUser', async (req: Request, res: Response) => { 
    console.log("🚀 ~ file: routes.ts:6 ~ router.post ~ req.body:", req.body)
    
    
    res.status(200).send(await userRegistration(req, res)) })




export default router
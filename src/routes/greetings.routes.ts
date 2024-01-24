import { Router, Request, Response } from "express";
import {pool} from '../config/connection'
export const gretingsRouter = Router();

gretingsRouter
    .get('/', async (_req:Request, res:Response) => {
        try {
            const result = await pool.query('SELECT NOW()')
            return res.json({result})
        } catch (error) {
            return res.json({error})
        }
    });
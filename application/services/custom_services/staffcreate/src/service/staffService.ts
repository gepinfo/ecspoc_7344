import { Request, Response } from 'express';
import {staffDao} from '../dao/staffDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let staff = new staffDao();

export class staffService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into staffService.ts: GpCreate')
     let  staffData = req.body;
     staff.GpCreate(staffData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from staffService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}
import { Request, Response } from 'express';
import {staffDao} from '../dao/staffDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let staff = new staffDao();

export class staffService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into staffService.ts: GpGetAllValues')
     
     staff.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from staffService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}
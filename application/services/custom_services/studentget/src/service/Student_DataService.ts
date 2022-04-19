import { Request, Response } from 'express';
import {Student_DataDao} from '../dao/Student_DataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let Student_Data = new Student_DataDao();

export class Student_DataService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpGetAllValues')
     
     Student_Data.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}
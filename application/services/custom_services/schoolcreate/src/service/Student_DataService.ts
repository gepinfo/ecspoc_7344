import { Request, Response } from 'express';
import {Student_DataDao} from '../dao/Student_DataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let Student_Data = new Student_DataDao();

export class Student_DataService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpDelete')
     let  Student_DataId = req.params.id;
     Student_Data.GpDelete(Student_DataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpSearch')
     let  Student_DataData = req.query;
     Student_Data.GpSearch(Student_DataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpSearchForUpdate')
     let  Student_DataData = req.body;
     Student_Data.GpSearchForUpdate(Student_DataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpUpdate')
     let  Student_DataData = req.body;
     Student_Data.GpUpdate(Student_DataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpGetNounById')
     let  Student_DataId = req.params.id;
     Student_Data.GpGetNounById(Student_DataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpGetAllValues')
     
     Student_Data.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into Student_DataService.ts: GpCreate')
     let  Student_DataData = req.body;
     Student_Data.GpCreate(Student_DataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from Student_DataService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}
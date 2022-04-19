import { Request, Response } from 'express';
import { Student_DataService } from '../service/Student_DataService';
import { CustomLogger } from '../config/Logger'
let Student_Data = new Student_DataService();

export class Student_DataController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
Student_Data.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpGetAllValues');
    })}


}
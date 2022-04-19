import { Request, Response } from 'express';
import { Student_DataService } from '../service/Student_DataService';
import { CustomLogger } from '../config/Logger'
let Student_Data = new Student_DataService();

export class Student_DataController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
Student_Data.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
Student_Data.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
Student_Data.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
Student_Data.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
Student_Data.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
Student_Data.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
Student_Data.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into Student_DataController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from Student_DataController.ts: GpCreate');
    })}


}
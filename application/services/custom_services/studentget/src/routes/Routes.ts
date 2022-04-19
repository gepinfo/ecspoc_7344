import { Request, Response, NextFunction } from "express";
import { Student_DataController } from '../controller/Student_DataController';


export class Routes {
    private Student_Data: Student_DataController = new Student_DataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Student_Data').get(this.Student_Data.GpGetAllValues);
     }

}
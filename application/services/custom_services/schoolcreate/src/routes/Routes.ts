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
        app.route('/Student_Data/:id').delete(this.Student_Data.GpDelete);
app.route('/Student_Data/get/search').get(this.Student_Data.GpSearch);
app.route('/Student_Data/get/update').put(this.Student_Data.GpSearchForUpdate);
app.route('/Student_Data').put(this.Student_Data.GpUpdate);
app.route('/Student_Data/:id').get(this.Student_Data.GpGetNounById);
app.route('/Student_Data').get(this.Student_Data.GpGetAllValues);
app.route('/Student_Data').post(this.Student_Data.GpCreate);
     }

}
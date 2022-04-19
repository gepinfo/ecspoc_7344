import { Request, Response } from 'express';
import { staffService } from '../service/staffService';
import { CustomLogger } from '../config/Logger'
let staff = new staffService();

export class staffController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
staff.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into staffController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from staffController.ts: GpCreate');
    })}


}
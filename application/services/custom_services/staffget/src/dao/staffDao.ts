import * as mongoose from 'mongoose';
import staffModel from '../models/staff';
import { CustomLogger } from '../config/Logger'


export class staffDao {
    private staff = staffModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into staffDao.ts: GpGetAllValues');

    

    
    
    
    this.staff.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from staffDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
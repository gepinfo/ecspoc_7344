import * as mongoose from 'mongoose';
import Student_DataModel from '../models/Student_Data';
import { CustomLogger } from '../config/Logger'


export class Student_DataDao {
    private Student_Data = Student_DataModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpGetAllValues');

    

    
    
    
    this.Student_Data.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
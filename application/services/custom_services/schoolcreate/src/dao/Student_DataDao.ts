import * as mongoose from 'mongoose';
import Student_DataModel from '../models/Student_Data';
import { CustomLogger } from '../config/Logger'


export class Student_DataDao {
    private Student_Data = Student_DataModel;
    constructor() { }
    
    public async GpDelete(Student_DataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpDelete');

    

    
    
    
    this.Student_Data.findByIdAndRemove(Student_DataId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(Student_DataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(Student_DataData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.Student_Data.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(Student_DataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpSearchForUpdate');

    

    
    
    
    this.Student_Data.findOneAndUpdate({ _id: Student_DataData._id }, Student_DataData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(Student_DataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpUpdate');

    

    
    
    
    this.Student_Data.findOneAndUpdate({ _id: Student_DataData._id }, Student_DataData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(Student_DataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpGetNounById');

    

    
    
    
    this.Student_Data.findById(Student_DataId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpGetAllValues');

    

    
    
    
    this.Student_Data.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(Student_DataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into Student_DataDao.ts: GpCreate');

    let temp = new Student_DataModel(Student_DataData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from Student_DataDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
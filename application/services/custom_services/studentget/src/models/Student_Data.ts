
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Student_DataSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Student_Name: String,
   Student_Age: String,
   Student_Roll_No: Number
})

const Student_DataModel = mongoose.model('Student_Data', Student_DataSchema, 'Student_Data');
export default Student_DataModel;

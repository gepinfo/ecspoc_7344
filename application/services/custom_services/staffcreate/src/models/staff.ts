
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const staffSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   staff_name: String,
   staff_age: String,
   staff_roll_no: Number
})

const staffModel = mongoose.model('staff', staffSchema, 'staff');
export default staffModel;

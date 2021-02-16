import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  EmployeeCode: { type: String, required: true },
  Tasks: [taskSchema],
});

const Employee = model('Employee', employeeSchema);
export default Employee;

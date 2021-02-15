import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },

  EmployeeCode: { type: String, required: true },
});

employeeSchema.plugin(autoIncrement.plugin, {
  model: 'Employee',
  field: 'EmployeeID',
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;

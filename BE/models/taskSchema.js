import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  EmployeeCode: String,
  Tasks: {
    Name: String,
    Description: String,
    Time: Number,
  },
});

const Task = model('Task', taskSchema);
export default Task;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  EmployeeCode: String,
  Tasks: {
    Name: String,
    Description: String,
    Time: Number,
  },
});

const Task = mongoose.model('Task', taskSchema);
export default Task;

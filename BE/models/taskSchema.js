import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: Number, required: true },
});

const Task = model('Task', taskSchema);
export default Task;

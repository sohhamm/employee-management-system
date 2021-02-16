import express from 'express';

const router = express.Router();
import Task from '../../models/taskSchema.js';
import { getTasks } from '../../controllers/tasks.controller.js';
import { fetchTask } from '../../middleware/fetchTask';

//get all tasks
router.get('/', getTasks);

//get one task
router.get('/:id', fetchTask, (req, res) => {
  res.send(res.task);
});

// create one task
router.post('/', async (req, res) => {
  const task = new Task({
    name: req.body.name,
    description: req.body.description,
    time: req.body.time,
  });
  console.log(task);
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//update one task
router.patch('/:id', fetchTask, async (req, res) => {
  if (req.body.name != null) {
    res.task.name = req.body.name;
  }
  if (req.body.description != null) {
    res.task.description = req.body.description;
  }
  if (req.body.time != null) {
    res.task.time = req.body.time;
  }
  try {
    const updatedTasks = await res.task.save();
    res.json(updatedTasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete one task
router.delete('/:id', fetchTask, async (req, res) => {
  try {
    // console.log(res);
    await res.task.remove();
    res.json({ message: 'Deleted Task' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

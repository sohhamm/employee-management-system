import express from 'express';

const router = express.Router();
import Task from '../../models/taskSchema.js';

//get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get one task
router.get('/:id', getTask, (req, res) => {
  res.send(res.task.name);
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
router.patch('/:id', getTask, async (req, res) => {
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
router.delete('/:id', getTask, async (req, res) => {
  try {
    // console.log(res);
    await res.task.remove();
    res.json({ message: 'Deleted Task' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//middleware
async function getTask(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id);
    // console.log(task);
    if (task == null) {
      return res.status(404).json({ message: 'Cannot find task' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.task = task;
  next();
}

export default router;

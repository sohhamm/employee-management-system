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

// create one task
router.post('/:id', (req, res) => {
  res.send({
    type: 'POST',
    name: req.body.name,
    description: req.body.description,
  });
});

//update one task
router.patch('/tasks/:id', function (req, res) {
  res.send({ type: 'PUT' });
});

//delete one task
router.delete('/tasks/:id', function (req, res) {
  res.send({ type: 'DELETE' });
});

export default router;

import express from 'express';

const route = express.Router();

router.get('/tasks', (req, res) => {
  res.send({ type: 'GET' });
});

router.post('/tasks', (req, res) => {
  res.send({
    type: 'POST',
    name: req.body.name,
    description: req.body.description,
  });
});

router.put('/tasks/:id', function (req, res) {
  res.send({ type: 'PUT' });
});

router.delete('/tasks/:id', function (req, res) {
  res.send({ type: 'DELETE' });
});

export default taskRoutes;

export const fetchTask = async (req, res, next) => {
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
};

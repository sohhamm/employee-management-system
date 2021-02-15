import axios from 'axios';

const url = 'http://localhost:5000/employeepanel';

export const getTasks = (newTask) => axios.get(url, newTask);
export const createTasks = () => axios.post(url);
export const updateTasks = (task) => axios.put(url, task);
export const deleteTasks = (task) => axios.delete(url, task);

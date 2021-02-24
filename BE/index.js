import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import taskRoutes from './routes/employeePanel/tasks.routes.js';
import timingsRoutes from './routes/employeePanel/timings.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const CONNECTION_URL = process.env.URI;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

mongoose.connect(CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
mongoose.Promise = global.Promise;

//routes
app.use('/tasks', taskRoutes);

app.use('/timings', timingsRoutes);

app.get('/', (req, res) => {
  res.send('Hello Humaps');
});

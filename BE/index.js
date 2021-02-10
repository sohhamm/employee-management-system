import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello Humaps');
});

app.listen(PORT, () => {
  console.log(`listening successfully at PORT:${PORT}`);
});

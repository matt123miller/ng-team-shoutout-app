import express from 'express';

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const host = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/colleagues', (req, res) => {
  const matt = {
    name: 'Matt',
    role: 'CF Developer',
  };
  const tim = {
    name: 'Tim',
    role: 'CF Developer',
  };
  const scott = {
    name: 'Scott',
    role: 'Web Developer',
  };

  res.send({ matt, tim, scott });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

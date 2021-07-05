const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ foo: 'baz' });
});

const { PORT = 5000 } = process.env;
app.listen(PORT);

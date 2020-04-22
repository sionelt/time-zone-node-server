const express = require('express');
const cors = require('cors');

const { getTime } = require('./time');

const app = express();

app.use(cors());

app.get('/api/time', (req, res) => {
  const { timezone } = req.query;

  try {
    const time = getTime(timezone);
    res.status(200).send(time);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`--- server listening on port: ${port} ---`);
});

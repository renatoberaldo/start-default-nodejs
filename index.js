const express = require('express');
const router = require('./src/routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(3001, () => {
  console.log('Server running  on  port 3001');
});

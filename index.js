const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dest')));

app.listen(5001, () =>
  console.log(`Example app listening on port 5001!`)
);
const express = require('express');
const path = require('path');
const server = express();

const PORT = process.env.PORT || 1337;

server.use(express.static('assets'));

server.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

server.listen(PORT, function () {
  console.log('Server listening on:', PORT);
});

const express = require('express');
const ip = require('./Controllers/network');
const router = require('./Controllers/router');
const app = express();

const host = '10.158.0.5';
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(router);
app.listen(3000, host, () => {
  console.log('Listesing on port 3000');
});

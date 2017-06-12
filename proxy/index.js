require('dotenv').config();

const express = require('express');
const proxy = require('http-proxy-middleware');

const PORT = process.env.PORT || 4000;

// setup http + express
const app = express();

const apiProxy = proxy(['/auth', '/api', '/dashboard', '/dpd.js', '/__resources'], {
  target: process.env.BACKEND_URL,
  pathRewrite: {'^/api' : ''}
});

// redirect auth, api and deployd dashboard requests
app.use('/', apiProxy);
app.use(express.static('dist'));

// start server
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

app.on('error', error => console.log(error));

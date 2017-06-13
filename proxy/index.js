require('dotenv').config();

const express = require('express');
// const proxy = require('http-proxy-middleware');

const PORT = process.env.PORT || 4000;

// setup http + express
const app = express();

// const apiProxy = proxy(['/auth', '/api', '/dashboard', '/dpd.js', '/__resources'], {
//   target: process.env.BACKEND_URL,
//   pathRewrite: {'^/api' : ''}
// });
//
// // redirect auth, api and deployd dashboard requests
// app.use('/', apiProxy);
// app.use(express.static('dist'));

// start server
// app.listen(PORT, () => {
//   console.log(`Listening at port ${PORT}`);
// });
//
// app.on('error', error => console.log(error));


const server = require('http').createServer(app);

// setup deployd
require('deployd').attach(server, {
  env: process.env.NODE_ENV,
  db: {connectionString: process.env.DB_CONNECTION_STRING}
});

const filter = (req, res, next) => {
  const dpdPaths = ['/dpd.js', '/auth', '/dashboard', '/__resources'];
  const match = dpdPaths
    .some(path => req.path.indexOf(path) !== -1);

  if(!match) {
    next('route');
  }

  return next();
};

const logger = (req, res, next) => {
  console.log(req.path);
  next();
};

app.use('/api', [logger, server.handleRequest]);
// After attach, express can use server.handleRequest as middleware
app.use('/', [filter, server.handleRequest]);

app.use(express.static('dist'));

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

server.on('error', error => console.log(error));

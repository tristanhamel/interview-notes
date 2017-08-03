require('dotenv').config();

const express = require('express');
// const proxy = require('http-proxy-middleware');

const PORT = process.env.PORT || 4000;

// setup http + express
const app = express();

const server = require('http').createServer(app);

// setup deployd
require('deployd').attach(server, {
  env: process.env.NODE_ENV,
  db: {connectionString: process.env.DB_CONNECTION_STRING}
});

app.use('/after-auth',(req, res) => {
  const data = JSON.stringify(req.query);

  res.send(`
    <html>
      <script type="text/javascript">
        window.opener.postMessage(${data}, 'http://localhost:8080');
        window.close();
      </script>
    </html>
  `);
});

// After attach, express can use server.handleRequest as middleware
app.use('/', [server.handleRequest]);


app.use(express.static('dist'));

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

server.on('error', error => console.log(error));

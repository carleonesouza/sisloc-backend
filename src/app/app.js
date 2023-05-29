const express = require('express');
const config = require('../config/config');
const authMiddleware = require('../middleware/auth');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
  req.trackId = req.id;
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.header('Access-Control-Allow-Origin', '*'); 


  if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Session');
      res.statusCode = 200;
      res.end();
      return;
  }
  next();
})


app.use('/v1/api', require('../routes/common.routes'));
app.use('/v1/api', authMiddleware.checkAuth, require('../routes/auth.routes'));

// Basic 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 404, message: 'Not found' }).end();
});

// Basic error handler
app.use((err, req, res) => {
  if (err.status && err.status < 500) {
    res.status(err.status).json(err).end();
  } else {
    res.status(500).json({ status: 500, message: 'Internal server error' }).end();
  }
});


module.exports = app;
'use strict';
const express = require('express');
const router = require('../routes/v1.js');
const notFound = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));



app.use(cors());
app.use(router);
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server:app,
  start:port=>{
    let PORT = port || process.env.port || 3000;
    app.listen(PORT,()=>console.log(`listen on ${PORT}`));
  },
};

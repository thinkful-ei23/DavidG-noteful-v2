'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');

const notesRouter = require('./routes/notes');
const foldersRouter = require('./routes/folders');

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(cors());

app.use(express.json());

app.use('/api/notes', notesRouter);
app.use('/api/folders', foldersRouter);


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});
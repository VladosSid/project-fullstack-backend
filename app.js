const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const { authRouter } = require('./routes/api/auth');
const recipesRouter = require('./routes/api/recipes');
const subscribeRouter = require('./routes/api/subscribe');
// const searchRouter = require('./routes/api/search');



const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/api/subscribe', subscribeRouter);

app.use('/api/users', authRouter);
app.use('/api/recipes', recipesRouter);
// app.use('/api/search', searchRouter);


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

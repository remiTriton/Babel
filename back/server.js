const express = require('express')
const usersRouter = require('./routes/users');
const wineRouter = require('./routes/wine');
// const indexRouter = require('./routes/index')

const port = 3001;

// mongodb
const db = require('./helpers/db')();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', usersRouter);
app.use('/api/wine', wineRouter);

// catch 404 and forward to error handler

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`backend start on http://localhost:${3001}`);
});

module.exports = app;
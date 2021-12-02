const express = require('express')
const usersRouter = require('./routes/users');
const winesRouter = require('./routes/wines');
const ordersRouter = require('./routes/orders');
const passwordReset = require("./routes/passwordReset")
const port = process.env.APP_PORT || 3001;
const app = express();
const cors = require('cors');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', usersRouter.router);
app.use('/api/wines', winesRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/password-reset', passwordReset);

app.use(cors());

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
  console.log(`backend start on http://localhost:${port}`);
});

module.exports = app;

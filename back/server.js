const express = require('express')
// const indexRouter = require('./routes/index')

// mongodb
const db = require('./helpers/db')()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', (req, res) => {
  res.send('HelloWorld');
})

// catch 404 and forward to error handler

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
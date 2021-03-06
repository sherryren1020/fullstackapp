// console.log("test")
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var dotenv=require('dotenv')
var helmet=require('helmet')
var cors = require('cors')
// var validateToken = require('./middleware/validateToken')
dotenv.config()

mongoose.connect(process.env.MONGODB_LOCATION)


var indexRouter = require('./routes/index');
//  var usersRouter = require('./routes/api/users');
var apiRouter = require('./routes/api');
// var songsRouter = require('./routes/api/songs')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(helmet())
// app.use(validateToken)


app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', apiRouter);
// app.use('/api/songs', songsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

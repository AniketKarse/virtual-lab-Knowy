var createError = require('http-errors');
var express = require('express');
var path = require('path');
var hbs = require('hbs')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

require('./db/mongoDB')
const User = require('./models/user-model')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teacherRouter = require('./routes/teacher')
var compilerRouter = require('./routes/compiler');
var practScoreRouter = require('./routes/practScore');
var leaderBoardRouter = require('./routes/leaderboard')


var port = process.env.PORT || '3000';

var app = express();

hbs.registerPartials(path.join(__dirname, 'views/partials'), (err) => {"ERROR"})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/compiler', compilerRouter);
app.use('/teacher', teacherRouter);
app.use('/practScore', practScoreRouter);
app.use('/leaderBoard', leaderBoardRouter);



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


app.listen(port, () => {
  console.log("Server is running on " + port)
})

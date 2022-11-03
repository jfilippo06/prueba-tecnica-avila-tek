const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./database/db')
const session = require('express-session')
const passport = require('passport')
const User = require('./models/User')
const flash = require('connect-flash')

const indexRouter = require('./routes/index');

const app = express();

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  name: process.env.NAME,
}))

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user,done) => done(null, {id: user._id, userName: user.userName}))
passport.deserializeUser(async (user,done) => {
    const userBD = await User.findById(user.id)
    return done(null, {id: userBD._id, userName: userBD.userName})
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next) => {
  res.locals.messages = req.flash('messages')
  next()
})

app.use('/', indexRouter);

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

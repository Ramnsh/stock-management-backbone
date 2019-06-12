var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./config/database')

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Connect to MySQL on start

db.connect(db.MODE_PRODUCTION, function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
        } else {
        console.log('DB connection established...')
    }
})
module.exports = app;

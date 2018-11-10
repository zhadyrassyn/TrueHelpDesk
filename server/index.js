require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const morgan = require('morgan');

const mongoose = require('./db/connect');
const passport = require('./service/passport');
const indexRouter = require('./router/router');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(session({
  secret: 'jljklh[oqreync',
  resave: false,
  saveUninitialized: false,
  name: 'sessionID',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
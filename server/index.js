const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const indexRouter = require('./router/router');

var mongooseConnection = require('./db/mongoose.connect').mongooseConnection;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.get('/employee', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/employee/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
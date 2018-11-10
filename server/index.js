const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./router/router');
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
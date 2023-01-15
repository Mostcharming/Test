const home = require('./routes/home');
const list = require('./routes/list');
const input = require('./routes/input');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', home);
app.use('/list', list);
app.use('/input', input);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
// const validator = require('./middleware/validator');
const gameRouter = require('./routes/game');
const foodRouter = require('./routes/food');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(gameRouter);
app.use(foodRouter);

app.get('/', (req, res, next) => {
  
  const message = `Working Good!`;
  res.status(200).send(message);
});

// app.get('/person', validator, (req, res, next) => {

//   let person = {
//     name: req.query.name,
//   };

//   res.status(200).json(person);
// });

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

app.use(errorHandler);
app.use('*', notFound);

module.exports = { start, app };

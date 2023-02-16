'use strict';

const express = require('express');
const { gameModel } = require('../models');

const router = express.Router();

router.get('/game', async (req, res, next) => {
  const games = await gameModel.findAll();
  console.log(games);
  res.status(200).send(games);
});

router.get('/game/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log('food id is: ', id);
  const singleGame = await gameModel.findOne({
    where: {id},
  });
  res.status(200).send(singleGame);
  // Find by Pk
});

router.post('/game', async (req, res, next) => {
  console.log('this is my body', req.body);
  try {
    const newGame = await gameModel.create(req.body);
    res.status(200).send(newGame);
  } catch (e) {
    next(e);
  }
});

router.delete('/game/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteGame = await gameModel.destroy({where:{id}});
    res.status(200).json(deleteGame[0]);
  } catch (e) {
    next(e);
  }
});

router.put('/game/:id', async (req, res, next) => {

  const { id } = req.params;
  console.log(id);
  const updateGame = await gameModel.update(req.body, { where: { id } });
  res.status(200).send(updateGame);
});


module.exports = router;
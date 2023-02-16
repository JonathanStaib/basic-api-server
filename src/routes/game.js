'use strict';

const express = require('express');
const { gameModel } = require('../models');

const router = express.Router();

router.get('/game', async (req, res, next) => {
  const games = await gameModel.findAll();
  console.log(games);
  res.status(200).send(games);
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
    console.log(req.params.id);
    const deleteGame = await gameModel.destroy({where:{id:req.params.id}});
    res.status(200).json(deleteGame[0]);
  } catch (e) {
    next(e);
  }
});

router.put('/game/:name', async (req, res, next) => {
  try {
    console.log(req.params.id);
    const updateGame = await gameModel.update({name:req.params.name}, {
      where: {
        name:'apex',
      },
    });
    res.status(200).send(updateGame);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
'use strict';

const express = require('express');
const { foodModel } = require('../models/food');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  const foods = await foodModel.findAll();
  res.status(200).send(foods);
});

router.post('/food', async (req, res, next) => {
  try {
    const newFood = await foodModel.create(req.body);
    res.status(200).send(newFood);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
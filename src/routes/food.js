const express = require('express');
const { foodModel } = require('../models');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  const foods = await foodModel.findAll();
  console.log(foods);
  res.status(200).send(foods);
});

router.post('/food', async (req, res, next) => {
  console.log('this is my body', req.body);
  try {
    const newfood = await foodModel.create(req.body);
    res.status(200).send(newfood);
  } catch (e) {
    next(e);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    console.log(req.params.id);
    const deleteFood = await foodModel.destroy({where:{id:req.params.id}});
    res.status(200).json(deleteFood[0]);
  } catch (e) {
    next(e);
  }
});

router.put('/food/:name', async (req, res, next) => {
  try {
    console.log(req.params.id);
    const updateFood = await foodModel.update({name:req.params.name}, {
      where: {
        name:'banana',
      },
    });
    res.status(200).send(updateFood);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
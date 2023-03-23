const router = require
const { json } = require('express');
const { Recipe } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newRecipe = await Recipe.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newRecipe);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;

// trying to connect the recipe API to the routes so that it will render on the webpage
// post and get: this js is for the post and the bookroutes is for the get
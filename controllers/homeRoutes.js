const router = require('express').Router();
const { description, recipe, User } = require('../models');
const { upsert } = require('../models/recipe');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // const recipeData = await recipe.findAll({

    // })

    // CSSConditionRule.log('recipe data', recipeData)
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  res.render('signup')
})

router.get('/search', async (req, res) => {
  res.render('search')
})

router.get('/profile', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id);
  
       const user = await userData.get({plain: true});
  console.log(user)
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  
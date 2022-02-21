const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const pokemonController = require('./controllers/pokemonController');
const userController = require('./controllers/userController');


router.get('/', mainController.homePage);

router.get('/detailpokemon/:id', pokemonController.detailpokemon);
router.get('/listeoftypes', pokemonController.listeOfTypes);
router.get('/pagetypechoice/:id', pokemonController.typeChoice);


router.get('/register', userController.registerPage);
router.post('/register', userController.createUser);

router.get('/login', userController.loginPage);
router.post('/login', userController.userLogin);
router.get('/logOut', userController.userLogOut);


module.exports = router;
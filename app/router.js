const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const pokemonController = require('./controllers/pokemonController');
const userController = require('./controllers/userController');
const deckController = require('./controllers/deckController');
const battleController = require('./controllers/battleController');

router.get('/', mainController.homePage);

router.get('/detailpokemon/:id', pokemonController.detailpokemon);
router.get('/listeoftypes', pokemonController.listeOfTypes);
router.get('/pagetypechoice/:id', pokemonController.typeChoice);

router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id', deckController.addPokemon);
router.get('/deck/remove/:id', deckController.removePokemon);

router.get('/battle', battleController.battlePage);
router.get('/battle/fight', battleController.battleBots);

router.get('/register', userController.registerPage);
router.post('/register', userController.createUser);
router.get('/login', userController.loginPage);
router.post('/login', userController.userLogin);
router.get('/profil', userController.profilPage);
router.get('/logOut', userController.userLogOut);


module.exports = router;
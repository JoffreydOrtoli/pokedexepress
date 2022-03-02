const express = require('express');
const router = express.Router();

const pokemonController = require('./controllers/pokemonController');
const typeController = require('./controllers/typeController');
const userController = require('./controllers/userController');
const deckController = require('./controllers/deckController');
const battleController = require('./controllers/battleController');

// Routes pokemon user
router.get('/pokemon', pokemonController.getAllOnPokemon);
router.get('/pokemon/:pokemon_id', pokemonController.getOnPokemon);

// Routes pokemon admin
router.post('/pokemon/', pokemonController.createPokemon);
router.patch('/pokemon/:pokemon_id', pokemonController.updatePokemon);
router.delete('/pokemon/:pokemon_id', pokemonController.deletePokemon);

// Routes type
router.get('/type', typeController.getAllType);
router.get('/type/:type_id', typeController.GetAllPokemonFromOneType);


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
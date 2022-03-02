const express = require('express');
const router = express.Router();

const pokemonController = require('../controllers/pokemonController');
const typeController = require('../controllers/typeController');
const deckController = require('../controllers/deckController');
const battleController = require('../controllers/battleController');
const userController = require('../controllers/userController');


// Routes pokemon
router.get('/pokemon', pokemonController.getAllOnPokemon);
router.get('/pokemon/:pokemon_id', pokemonController.getOnPokemon);

//  Routes type
router.get('/type', typeController.getAllType);
router.get('/type/:type_id', typeController.GetAllPokemonFromOneType);


router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id', deckController.addPokemon);
router.get('/deck/remove/:id', deckController.removePokemon);
router.get('/battle', battleController.battlePage);
router.get('/battle/fight', battleController.battleBots);

// Routes user
router.post('/user/register', userController.createUser);
router.post('/user/login', userController.userLogin);
router.patch('/user/:user_id', userController.updateUser);
router.delete('/user/:user_id', userController.deleteUser);


module.exports = router;
const express = require("express");

const router = express.Router();

const pokemonController = require("../controllers/pokemonController");
const typeController = require("../controllers/typeController");
const deckController = require("../controllers/deckController");
const battleController = require("../controllers/battleController");
const userController = require("../controllers/userController");

const tokenControl = require("../middlewares/authMiddelware");

// Routes pokemon
router.get("/api/pokemons", pokemonController.getAllPokemon);
router.get("/api/pokemons/:pokemon_id", pokemonController.getOnPokemon);

//  Routes type
router.get("/api/types", typeController.getAllType);
router.get("/api/types/:type_id", typeController.GetAllPokemonFromOneType);

//  Routes decks et batailles
router.get("/api/deck", tokenControl, deckController.deckPage);
router.get("/api/deck/add/:id", tokenControl, deckController.addPokemon);
router.get("/api/deck/remove/:id", tokenControl, deckController.removePokemon);
router.get("/api/battle", tokenControl, battleController.battlePage);
router.get("/api/battle/fight", tokenControl, battleController.battleBots);

// Routes user
router.post("/api/user/register", userController.createUser);
router.post("/api/user/login", userController.userLogin);
router.get("/api/user/logOut", tokenControl, userController.userLogOut);
router.patch("/api/user/:user_id", tokenControl, userController.updateUser);
router.delete("/api/user/:user_id", tokenControl, userController.deleteUser);

module.exports = router;

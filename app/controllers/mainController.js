const { Pokemon, Type } = require("../models");

const mainController = {

   async homePage(req, res) {
        const allPokemon = await Pokemon.findAll();
        res.render('home', {allPokemon});
    }

};

module.exports = mainController;
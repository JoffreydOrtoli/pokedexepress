const { Pokemon, Type } = require("../models");

const pokemonController = {

    async detailpokemon(req, res) {
       const askedPokemon = req.params.id;
        const foundPokemon = await Pokemon.findByPk(askedPokemon, 
            { include : ["types"]});
        res.render('detailpokemon', {foundPokemon, types: foundPokemon.types});    
    },

    async listeOfTypes(req, res) {
        const allTypes = await Type.findAll();
        res.render('listeoftypes', {allTypes});
    },

    async typeChoice(req, res) {
        const askedType = req.params.id;
        const foundType = await Type.findByPk(askedType, 
            { include : ["pokemons"]});
        res.render('pagetypechoice', {foundType, pokemons: foundType.pokemons});
        
    }
};

module.exports = pokemonController;
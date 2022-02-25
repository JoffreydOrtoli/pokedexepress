const { Pokemon, Type } = require("../models");

const deckController = {

    async addPokemon(req, res) {

        const pokemonId = req.params.id;
        const foundPokemon = req.session.deck.find(pokemon => pokemon.id === parseInt(pokemonId, 10));
        if (foundPokemon) {
            res.redirect("/deck");
        } else {
            if (req.session.deck.length < 6) {
                try {
                    const pokemon = await Pokemon.findByPk(pokemonId);
                    if (pokemon) {
                        req.session.deck.push(pokemon);
                        res.redirect("/deck");
                    } else {
                        res.status(404).render("404");
                    }
                } catch (error) {
                    console.error(error);
                    response.status(500).send(error);
                }
            } else {
                res.redirect("/deck");
            }
        }

    },

    async deckPage(req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        res.render("deck", { pokemons: req.session.deck });
    },

    async removePokemon(req, res) {
        const findPokemon = req.params.id;

        const newDeck = req.session.deck.filter((pokemon) => {
            return pokemon.id !== parseInt(findPokemon, 10);
        });
        req.session.deck = newDeck;
        res.redirect('/deck');
    }

};

module.exports = deckController;
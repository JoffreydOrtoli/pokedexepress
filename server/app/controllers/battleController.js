const { Pokemon, Type } = require("../models");
const sequelize = require('../db/sequelize');


const battleController = {

    battlePage(req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        randomPokemon = [];
        res.render("battle", {randomPokemon});
    },

    async battleBots(req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        try {
            const randomPokemon = await Pokemon.findAll({ order: sequelize.random(), limit: 2,});
            res.render("battle", {randomPokemon});
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    }
    
};

module.exports = battleController;
const { Type } = require("../models");

const typeController = {

    async getAllType(req, res) {
        try {
            const allType = await Type.findAll();
            res.json(allType);
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    },

    async GetAllPokemonFromOneType(req, res) {
        try {
            const askedType = req.params.type_id;
            const foundType = await Type.findByPk(askedType, {
                include: ["pokemons"]
            });
            res.json(foundType);
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    }


};

module.exports = typeController;
const { User, Pokemon, Type } = require('../models');

const adminController = {

    // User
    async getAllUser(req, res) {
        try {
            const allUser = await User.findAll({ include: ["pokemons"] });
            res.json(allUser);
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    },

    async getOnUser(req, res) {
        const userId = req.params.user_id;
        try {
            const foundUser = await User.findByPk(userId, {
                include: ["pokemons"]
            });
            res.json(foundUser);
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    },

    async userRoleChange(req, res) {
        const userId = req.params.user_id;
        const role = req.body;
        try {
            const foundUser = await User.findByPk(userId);
            if (foundUser) {
                const newRole = await foundUser.update(role);
                res.json(newRole);
            }
            res.json(foundUser);
        } catch (error) {
            console.error(error);
            res.status(500).send("error");
        }
    },

    //  Pokemon
    async createPokemon(req, res) {
        const { name, pv, attack, defense, attack_spe, defense_spe, speed } = req.body;
        try {
            const pokemon = await Pokemon.findOne( { where : {name: req.body.name}});
            if (!pokemon) {
                const createPokemon = await Pokemon.create({ name, pv, attack, defense, attack_spe, defense_spe, speed });
                res.json(createPokemon);
            }
            else {
                res.status(400).json("Erreur Pokemon non trouvé");
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    async updatePokemon(req, res) {
        const pokemonId = req.params.pokemon_id;
        const { name, pv, attack, defense, attack_spe, defense_spe, speed } = req.body;
        try {
            const pokemon = await Pokemon.findByPk(pokemonId);
            if (pokemon) {
                const updatePokemon = await pokemon.update({ name, pv, attack, defense, attack_spe, defense_spe, speed });
                res.json(updatePokemon);
            }
            else {
                res.status(404).json("Pokemon non modifié");
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    async deletePokemon(req, res) {
        const pokemonId = req.params.pokemon_id;
        try {
            const foundPokemon = await Pokemon.findByPk(pokemonId);
            if (foundPokemon) {
                await foundPokemon.destroy();
                res.json("done");
            } else {
                    res.status(404).json('CkCé!!!');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    //  Type
    async createType(req, res) {
        const { name, color } = req.body;
        try {
            const type = await Type.findOne( { where : {name: req.body.name}});
            if (!type) {
                const createType = await Type.create({ name, color });
                res.json(createType);
            }
            else {
                res.status(400).json("Erreur Type non trouvé");
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    async updateType(req, res) {
        const typeId = req.params.type_id;
        const { name, pv, attack, defense, attack_spe, defense_spe, speed } = req.body;
        try {
            const type = await Type.findByPk(typeId);
            if (type) {
                const updateType = await type.update({ name, pv, attack, defense, attack_spe, defense_spe, speed });
                res.json(updateType);
            }
            else {
                res.status(404).json("Type non modifié");
            }
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    async deleteType(req, res) {
        const typeId = req.params.type_id;
        try {
            const foundType = await Type.findByPk(typeId);
            if (foundType) {
                await foundType.destroy();
                res.json("done");
            } else {
                    res.status(404).json('CkCé!!!');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }

};

module.exports = adminController;
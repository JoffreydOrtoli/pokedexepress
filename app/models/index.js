const Pokemon = require("./pokemon");
const Type = require("./type");
const User = require("./user");


Pokemon.belongsToMany(Type, {
    as: "types",
    through: "pokemon_type",
    foreignKey: "pokemon_id",
    otherKey: "type_id"
});

Type.belongsToMany(Pokemon, {
    as: "pokemons",
    through: "pokemon_type",
    foreignKey: "type_id",
    otherKey: "pokemon_id"
    
});

module.exports = { Pokemon, Type, User };
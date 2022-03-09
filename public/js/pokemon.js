const pokemonModule = {

    //  Récupération de la liste des pokemons et envoi au dom
    async getPokemonsFromApi() {
        try {
            const result = await fetch(app.baseUrl + 'pokemons');
            const data = await result.json();

            // TODO appel makePokemonInDom
            for (const pokemon of data) {
                pokemonModule.makeListPokemonsInDom(pokemon);
            }
            
        } catch (err) {
            console.error(err);
        }
    },
    //  Récupération de la liste des pokemons et envoi au dom
    makeListPokemonsInDom(data) {
        const templateListPokemon = document.getElementById('templateListPokemon');
        const clone = templateListPokemon.content.cloneNode(true);
        
        // clone.querySelector('.get-on-pokemon').href = `/pokemons/${data.id}`;
        clone.querySelector('.pokemons').id = data.id;
        clone.querySelector('.pokemons').id = data.id;
        clone.querySelector('.pokemons-img').src = `/img/${data.id}.png`;
        clone.querySelector('.h5').innerText = data.name;

        clone.querySelector('.pokemons').addEventListener('click', (event) => {
            const pokemons = document.querySelectorAll('.pokemons');
            for (const pokemon of pokemons) {
                pokemon.hidden = true;
            }
            pokemonModule.getOnPokemonFromApi(event)}
        );

        const pokemons = document.querySelector('.pokemons-case');
        pokemons.appendChild(clone);
    },

    //  Récupération d'un pokemon pour liste solo
    async getOnPokemonFromApi(event) {
        const pokemon = event.target.closest('.pokemons');
        
        try {
            const result = await fetch(app.baseUrl + `pokemons/${pokemon.id}`);
            const data = await result.json();
            pokemonModule.makeOnPokemonInDom(data);
        } catch (err) {
            console.error(err);
        }
    },

    makeOnPokemonInDom(data) {
        const templatetPokemon = document.getElementById('templateLPokemon');
        const clone = templatetPokemon.content.cloneNode(true);
        // clone.querySelector('.get-on-pokemon').href = `/pokemons/${data.id}`;
        // clone.querySelector('.pokemons').id = data.id;
        clone.querySelector('.detail-pokemons_img').src = `/img/${data.id}.png`;
        // clone.querySelector('.h5').innerText = data.name;

        // clone.querySelector('.pokemons').addEventListener('click', (event) => {
        //     pokemonModule.getOnPokemonFromApi(event)});

        const pokemon = document.querySelector('.pokemons-case');
        pokemon.appendChild(clone);
    },
     
};
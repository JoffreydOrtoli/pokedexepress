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

        // Au moment de sélectionner un pokemon cache les autres
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
        const maxBars = 2.55;
        const templatetPokemon = document.getElementById('templatePokemon');
        const clone = templatetPokemon.content.cloneNode(true);
        clone.querySelector('.detail-pages_title').innerText = `Details de ${data.name}`;
        clone.querySelector('.pokemon').id = data.id;
        clone.querySelector('.detail-pokemon_img').src = `/img/${data.id}.png`;
        clone.querySelector('.detail-pokemon_idname').innerText = `#${data.id} ${data.name}`;
        clone.querySelector(".pv").innerText = data.pv;
        clone.querySelector(".attack").innerText = data.attack;
        clone.querySelector(".defense").innerText = data.defense;
        clone.querySelector(".attack-spe").innerText = data.attack_spe;
        clone.querySelector(".defense-spe").innerText = data.defense_spe;
        clone.querySelector(".speed").innerText = data.speed;
        clone.querySelector(".bar-pv").style.width = data.pv / maxBars + "%";
        clone.querySelector(".bar-attack").style.width = data.attack / maxBars + "%";
        clone.querySelector(".bar-defense").style.width = data.defense / maxBars + "%";
        clone.querySelector(".bar-attack_spe").style.width = data.attack_spe / maxBars + "%";
        clone.querySelector(".bar-defense_spe").style.width = data.defense_spe / maxBars + "%";
        clone.querySelector(".bar-speed").style.width = data.speed / maxBars + "%";
        console.log(data.types);
        clone.querySelector('.button_pokemon-type').innerText = data.types.name;
        // for (const d of data.types ) {
        //     clone.querySelector('.button_pokemon-type').innerText = d.name;
        // };
        const pokemon = document.querySelector('.pokemons-case');
        pokemon.appendChild(clone);
    }
     
};
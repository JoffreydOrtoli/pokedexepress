const app = {

    baseUrl: 'http://localhost:9999/',
    

    init() {

        pokemonModule.getPokemonsFromApi();
    }
};

document.addEventListener('DOMContentLoaded', app.init);
document.addEventListener('DOMContentLoaded', function () {
    fetchPokemonData();
});

function fetchPokemonData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error => console.error('Error fetching Pokémon data:', error));
}

function displayPokemonData(data) {
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    pokemonInfoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Experiencia base:</strong> ${data.base_experience}</p>
        <p><strong>Altura:</strong> ${data.height}</p>
        <p><strong>Peso:</strong> ${data.weight}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `;
}

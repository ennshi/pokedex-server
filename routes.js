const express = require('express');
const { getAllPokemons, getPokemon } = require('./controllers/pokemons.js');
const router = express.Router();

router.get('/pokemons', getAllPokemons);

router.get('/pokemon/:pokemonId', getPokemon);

router.get('/liked-pokemons');

router.post('/liked-pokemons');

router.delete('/liked-pokemons');

module.exports = router;

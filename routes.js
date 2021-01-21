const express = require('express');
const { getAllPokemons, getPokemon } = require('./controllers/pokemons');
const { getAllLikes, addToLikes, deleteFromLikes, getAllLikeIds } = require('./controllers/likes');
const router = express.Router();

router.get('/pokemons', getAllPokemons);

router.get('/pokemon/:pokemonId', getPokemon);

router.get('/liked-pokemons', getAllLikes);

router.post('/liked-pokemons', addToLikes);

router.delete('/liked-pokemons', deleteFromLikes);

router.get('/liked-pokemons-ids', getAllLikeIds);

module.exports = router;

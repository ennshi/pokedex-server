const express = require('express');
const { getAllPokemons } = require('./controllers/pokemons.js');
const router = express.Router();

router.get('/pokemons', getAllPokemons);

router.get('/pokemon/:id');

router.get('/liked-pokemons');

router.post('/liked-pokemons');

router.delete('/liked-pokemons');

module.exports = router;

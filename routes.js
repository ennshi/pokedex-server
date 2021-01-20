const express = require('express');
const router = express.Router();

router.get('/pokemons');

router.get('/pokemon/:id');

router.get('/liked-pokemons');

router.post('/liked-pokemons');

router.delete('/liked-pokemons');

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/pokemons', (req, res) => {
    res.write('hello');
    res.send();
});


module.exports = router;

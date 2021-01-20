const { db } = require('../db/fireStore');
const { filterSnapshotArrayFields } = require('../helpers/filterSnapshot');
const { createError } = require('../helpers/createError');

const collection = db.collection('pokemon');

exports.getAllPokemons = async (req, res, next) => {
    try {
        const pokemonsData = await collection.get();
        if(!pokemonsData.exists) {
            throw createError(404, 'No pokemons found');
        }
        const pokemons = filterSnapshotArrayFields(pokemonsData, ['id', 'name', 'img', 'type']);
        res.status(200).json({ data: pokemons });
    } catch (error) {
        next(error);
    }
};

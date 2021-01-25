const { db } = require('../db/fireStore');
const { filterSnapshotArrayFields, filterSnapshotFields } = require('../helpers/filterSnapshot');
const { createError } = require('../helpers/createError');
const { parseFilter } = require('../helpers/parseQuery');

const collection = db.collection('pokemons');

exports.getPokemons = async (req, res, next) => {
    const filter = parseFilter(req.query.filter);
    const page = req.query.page || 1;
    const limit = req.query.limit || 6;
    const offset = limit * (page - 1);
    try {
        const pokemonsRef = filter ?
            collection.where(...filter) :
            collection;
        const pokemonsData = await pokemonsRef.offset(offset).limit(limit).get();
        const pokemons = pokemonsData.size ? filterSnapshotArrayFields(pokemonsData, ['id', 'name', 'img', 'type']) : [];
        res.status(200).json({ data: pokemons });
    } catch (error) {
        next(error);
    }
};

exports.getPokemon = async (req, res, next) => {
    const { pokemonId } = req.params;
    try {
        const docRef = collection.doc(pokemonId);
        const pokemonData = await docRef.get();
        if(!pokemonData.exists) {
            throw createError(404, 'No pokemon found');
        }
        const pokemon = filterSnapshotFields(pokemonData, ['id', 'name', 'img', 'type', 'stats', 'misc']);
        res.status(200).json({ data: pokemon });
    } catch (error) {
        next(error);
    }
};

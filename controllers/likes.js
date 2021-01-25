const { db } = require('../db/fireStore');
const { filterSnapshotArrayFields, filterSnapshotArrayIds } = require('../helpers/filterSnapshot');
const { createError } = require('../helpers/createError');

const collection = db.collection('likes');

exports.getAllLikeIds = async (req, res, next) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 6;
    const offset = limit * (page - 1);
    try {
        const likesData = await collection.offset(offset).limit(limit).get();
        const likes = likesData.size ? filterSnapshotArrayIds(likesData) : [];
        res.status(200).json({ data: likes });
    } catch (error) {
        next(error);
    }
};

exports.getAllLikes = async (req, res, next) => {
    try {
        const likesData = await collection.get();
        const likes = likesData.size ? filterSnapshotArrayFields(likesData, ['id', 'name', 'img', 'type']) : [];
        res.status(200).json({ data: likes });
    } catch (error) {
        next(error);
    }
};

exports.addToLikes = async (req, res, next) => {
    const pokemonId = req.body.pokemonId;
    try {
        const ref = db.collection('pokemons').doc(pokemonId);
        const pokemonData = await ref.get();
        if(!pokemonData.exists) {
            throw createError(404, 'No pokemon found');
        }
        await collection.doc(pokemonId).set(pokemonData.data());
        res.status(201).json({ data: pokemonId });
    } catch (error) {
        next(error);
    }
};

exports.deleteFromLikes = async (req, res, next) => {
    const pokemonId = req.params.pokemonId;
    try {
        const ref = collection.doc(pokemonId);
        const pokemonData = await ref.get();
        if(!pokemonData.exists) {
            throw createError(404, 'No pokemon found');
        }
        await ref.delete();
        res.status(200).json({ data: pokemonId });
    } catch (error) {
        next(error);
    }
};

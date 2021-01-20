const { db } = require('../db/fireStore');
const { filterSnapshotArrayFields } = require('../helpers/filterSnapshot');
const { createError } = require('../helpers/createError');

const collection = db.collection('likes');

exports.getAllLikes = async (req, res, next) => {
    try {
        const likesData = await collection.get();
        const likes = likesData.size ? filterSnapshotArrayFields(likesData, ['id', 'name', 'img', 'type']) : [];
        res.status(200).json({ data: likes });
    } catch (error) {
        next(error);
    }
};

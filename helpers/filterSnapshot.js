const filterSnapshotFields = (snapshot, fields) => {
    const itemData = snapshot.data();
    const resultItem = {};
    fields.forEach(field => {
        resultItem[field] = itemData[field];
    });
    return resultItem;
};

const filterSnapshotArrayFields = (snapshotArray, fields) => {
    const result = [];
    snapshotArray.forEach(item => {
        const resultItem = filterSnapshotFields(item, fields);
        result.push(resultItem);
    });
    return result;
};

module.exports = {
    filterSnapshotArrayFields,
    filterSnapshotFields
};

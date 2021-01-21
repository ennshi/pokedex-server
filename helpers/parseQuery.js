const standardValue = (value) => (value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase());
const standardProperty = (property) => (property.toLowerCase());
exports.parseFilter = (filter) => {
    if(filter) {
        const [ rawProperty, rawValue ] = filter.split('::');
        const property = standardProperty(rawProperty);
        const value = standardValue(rawValue);
        return (
            (property === 'type') ?
            [property, 'array-contains', value] :
            [property, '==', value]
        );
    }
    return null;
};

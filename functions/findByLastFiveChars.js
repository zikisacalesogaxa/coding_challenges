let lastFiveChars = require('../functions/lastFiveChars');

module.exports = (arr, code) => {
    for (person of arr) {
        let chars = lastFiveChars(person._ID);
        if (chars === code) {
            return person.Name;
        }
    }
    return 'Person dont exist';
}